import json
from datetime import datetime, timezone, timedelta
from pathlib import Path

import pytest

CONTRACT_PATH = Path(__file__).parents[1] / "contracts" / "AgentDispute.py"
COMMIT_URL = "https://github.com/example/repo/commit/0123456789abcdef0123456789abcdef01234567"
BRANCH_URL = "https://github.com/example/repo/tree/main"
RAW_COMMIT_URL = "https://raw.githubusercontent.com/example/repo/0123456789abcdef0123456789abcdef01234567/README.md"
CREATOR = "0x" + "11" * 20
PROVIDER = "0x" + "22" * 20
OTHER = "0x" + "33" * 20


def iso(dt):
    return dt.astimezone(timezone.utc).isoformat()


def seed_submitted(contract, recovery_deadline=None, amount=1000):
    now = datetime.now(timezone.utc)
    recovery_deadline = recovery_deadline or iso(now + timedelta(hours=24))
    contract.creators.append(CREATOR)
    contract.providers.append(PROVIDER)
    contract.titles.append("Build a site")
    contract.requirements.append("Deliver the agreed site")
    contract.submission_urls.append(COMMIT_URL)
    contract.submission_commits.append("0123456789abcdef0123456789abcdef01234567")
    contract.amounts.append(amount)
    contract.statuses.append("SUBMITTED")
    contract.deadlines.append(iso(now + timedelta(hours=1)))
    contract.created_at.append(iso(now - timedelta(hours=1)))
    contract.submitted_at.append(iso(now))
    contract.recovery_deadlines.append(recovery_deadline)
    contract.resolved_at.append("")
    contract.scores.append(0)
    contract.verdicts.append("")
    contract.explanations.append("")
    contract.provider_payouts.append(0)
    contract.creator_refunds.append(0)


def seed_open(contract):
    now = datetime.now(timezone.utc)
    contract.creators.append(CREATOR)
    contract.providers.append(PROVIDER)
    contract.titles.append("Build a site")
    contract.requirements.append("Deliver the agreed site")
    contract.submission_urls.append("")
    contract.submission_commits.append("")
    contract.amounts.append(1000)
    contract.statuses.append("OPEN")
    contract.deadlines.append(iso(now + timedelta(hours=1)))
    contract.created_at.append(iso(now))
    contract.submitted_at.append("")
    contract.recovery_deadlines.append("")
    contract.resolved_at.append("")
    contract.scores.append(0)
    contract.verdicts.append("")
    contract.explanations.append("")
    contract.provider_payouts.append(0)
    contract.creator_refunds.append(0)


def test_immutable_evidence_validation(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    direct_vm.sender = PROVIDER
    seed_open(contract)

    with direct_vm.expect_revert("immutable GitHub commit"):
        contract.submit_dispute(0, BRANCH_URL)

    contract.submit_dispute(0, COMMIT_URL)
    assert contract.submission_commits[0] == "0123456789abcdef0123456789abcdef01234567"
    assert contract.statuses[0] == "SUBMITTED"


def test_raw_commit_evidence_is_accepted(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    direct_vm.sender = PROVIDER
    seed_open(contract)
    contract.submit_dispute(0, RAW_COMMIT_URL)
    assert contract.statuses[0] == "SUBMITTED"


def test_pass_is_fixed_100_percent(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_submitted(contract)
    direct_vm.mock_web(r".*github\.com.*", {"status": 200, "body": "immutable evidence"})
    direct_vm.mock_llm(r".*", json.dumps({"verdict": "PASS", "explanation": "Requirements satisfied."}))

    contract.evaluate_submission(0)

    assert contract.statuses[0] == "PAID"
    assert contract.scores[0] == 100
    assert contract.provider_payouts[0] == 1000
    assert contract.creator_refunds[0] == 0


def test_fail_is_fixed_zero_provider_payout(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_submitted(contract)
    direct_vm.mock_web(r".*github\.com.*", {"status": 200, "body": "missing requirements"})
    direct_vm.mock_llm(r".*", json.dumps({"verdict": "FAIL", "explanation": "Core requirement missing."}))

    contract.evaluate_submission(0)

    assert contract.statuses[0] == "REFUNDED"
    assert contract.scores[0] == 0
    assert contract.provider_payouts[0] == 0
    assert contract.creator_refunds[0] == 1000


def test_partial_is_fixed_50_50(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_submitted(contract, amount=1001)
    direct_vm.mock_web(r".*github\.com.*", {"status": 200, "body": "partial evidence"})
    direct_vm.mock_llm(r".*", json.dumps({"verdict": "PARTIAL", "explanation": "Some requirements are incomplete."}))

    contract.evaluate_submission(0)
    assert contract.statuses[0] == "PARTIAL"
    assert contract.scores[0] == 50

    contract.settle_partial(0)
    assert contract.statuses[0] == "PARTIAL_SETTLED"
    assert contract.provider_payouts[0] == 500
    assert contract.creator_refunds[0] == 501

    with direct_vm.expect_revert("not awaiting partial"):
        contract.settle_partial(0)


def test_non_success_evidence_response_fails_closed(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_submitted(contract)
    direct_vm.mock_web(r".*github\.com.*", {"status": 503, "body": "upstream unavailable"})

    with direct_vm.expect_revert("non-success status"):
        contract.evaluate_submission(0)

    assert contract.statuses[0] == "SUBMITTED"


def test_empty_evidence_fails_closed(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_submitted(contract)
    direct_vm.mock_web(r".*github\.com.*", {"status": 200, "body": ""})

    with direct_vm.expect_revert("empty"):
        contract.evaluate_submission(0)

    assert contract.statuses[0] == "SUBMITTED"


def test_oversized_evidence_fails_closed(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_submitted(contract)
    direct_vm.mock_web(r".*github\.com.*", {"status": 200, "body": "x" * 12001})

    with direct_vm.expect_revert("12000-byte"):
        contract.evaluate_submission(0)

    assert contract.statuses[0] == "SUBMITTED"


def test_malformed_evidence_fails_closed(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_submitted(contract)
    direct_vm.mock_web(r".*github\.com.*", {"status": 200, "body": b"\xff\xfe\xfd"})

    with direct_vm.expect_revert("UTF-8"):
        contract.evaluate_submission(0)

    assert contract.statuses[0] == "SUBMITTED"


def test_validator_disagreement_is_rejected(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_submitted(contract)
    direct_vm.mock_web(r".*github\.com.*", {"status": 200, "body": "immutable evidence"})
    direct_vm.mock_llm(r".*", json.dumps({"verdict": "PASS", "explanation": "ok"}))

    # Capture the validator, then simulate a validator observing mutated evidence.
    contract.evaluate_submission(0)
    assert contract.statuses[0] == "PAID"

    # The validator rule itself is exact: a different payout tier must disagree.
    direct_vm.clear_mocks()
    direct_vm.mock_web(r".*github\.com.*", {"status": 200, "body": "mutated content"})
    direct_vm.mock_llm(r".*", json.dumps({"verdict": "FAIL", "explanation": "different evidence"}))
    assert direct_vm.run_validator() is False


def test_recovery_after_timeout_refunds_creator(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    past = "2020-01-02T00:00:00+00:00"
    seed_submitted(contract, recovery_deadline=past)

    contract.recover_submitted(0)
    assert contract.statuses[0] == "RECOVERED"
    assert contract.creator_refunds[0] == 1000

    with direct_vm.expect_revert("not awaiting evaluation"):
        contract.recover_submitted(0)


def test_recovery_is_not_available_before_deadline(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_submitted(contract)

    with direct_vm.expect_revert("recovery window"):
        contract.recover_submitted(0)


def test_authorization_is_enforced(direct_vm, direct_deploy):
    contract = direct_deploy(str(CONTRACT_PATH))
    seed_open(contract)
    direct_vm.sender = OTHER

    with direct_vm.expect_revert("Only the designated provider"):
        contract.submit_dispute(0, COMMIT_URL)

    with direct_vm.expect_revert("Only the creator"):
        contract.cancel_dispute(0)
