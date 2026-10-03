# { "Depends": "py-genlayer:1jb45aa8ynh2a9c9xn3b7qqh8sm5q93hwfp7jqmwsfhh8jpz09h6" }

from genlayer import *
from datetime import datetime, timezone


@gl.evm.contract_interface
class _Recipient:
    class View:
        pass

    class Write:
        pass


MAX_EVIDENCE_BYTES = 12000
RECOVERY_WINDOW_SECONDS = 86400


class AgentDispute(gl.Contract):
    # Participants
    creators: DynArray[Address]
    providers: DynArray[Address]

    # Agreement
    titles: DynArray[str]
    requirements: DynArray[str]

    # Evidence
    # Only immutable GitHub commit references are accepted.
    submission_urls: DynArray[str]
    submission_commits: DynArray[str]

    # Escrow
    amounts: DynArray[u256]

    # Lifecycle
    statuses: DynArray[str]

    # Timing
    deadlines: DynArray[str]
    created_at: DynArray[str]
    submitted_at: DynArray[str]
    recovery_deadlines: DynArray[str]
    resolved_at: DynArray[str]

    # Adjudication
    # Score is derived deterministically from the agreed verdict:
    # PASS=100, PARTIAL=50, FAIL=0.
    scores: DynArray[u32]
    verdicts: DynArray[str]
    explanations: DynArray[str]

    # Result settlement
    provider_payouts: DynArray[u256]
    creator_refunds: DynArray[u256]

    def __init__(self):
        pass

    def _zero_address(self) -> Address:
        return Address("0x0000000000000000000000000000000000000000")

    def _now_iso(self) -> str:
        return datetime.now(timezone.utc).isoformat()

    def _now_timestamp(self) -> int:
        return int(datetime.now(timezone.utc).timestamp())

    def _deadline_timestamp(self, value: str) -> int:
        try:
            parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
            if parsed.tzinfo is None:
                parsed = parsed.replace(tzinfo=timezone.utc)
            return int(parsed.timestamp())
        except Exception:
            raise gl.vm.UserError("Invalid deadline. Use an ISO 8601 datetime.")

    def _is_before_deadline(self, deadline: str) -> bool:
        return self._now_timestamp() < self._deadline_timestamp(deadline)

    def _is_after_deadline(self, deadline: str) -> bool:
        return self._now_timestamp() >= self._deadline_timestamp(deadline)

    def _is_hex_sha(self, value: str) -> bool:
        if len(value) != 40:
            return False
        for ch in value.lower():
            if ch not in "0123456789abcdef":
                return False
        return True

    def _extract_commit_sha(self, url: str) -> str:
        # Supported immutable forms:
        # https://github.com/OWNER/REPO/commit/<40-hex-sha>
        # https://raw.githubusercontent.com/OWNER/REPO/<40-hex-sha>/PATH
        parts = url.strip().split("/")

        if len(parts) >= 7 and parts[2] == "github.com" and parts[5] == "commit":
            sha = parts[6].split("?")[0].split("#")[0]
            if self._is_hex_sha(sha):
                return sha.lower()

        if len(parts) >= 6 and parts[2] == "raw.githubusercontent.com":
            sha = parts[5].split("?")[0].split("#")[0]
            if self._is_hex_sha(sha):
                return sha.lower()

        raise gl.vm.UserError(
            "Evidence must be an immutable GitHub commit URL or raw GitHub URL pinned to a 40-character commit SHA"
        )

    def _validate_evidence_url(self, url: str) -> str:
        if not url.strip():
            raise gl.vm.UserError("Submission URL is required")
        return self._extract_commit_sha(url)

    def _require_valid_id(self, dispute_id: u32) -> None:
        if dispute_id >= u32(len(self.titles)):
            raise gl.vm.UserError("Dispute does not exist")

    def _score_for_verdict(self, verdict: str) -> u32:
        if verdict == "PASS":
            return u32(100)
        if verdict == "PARTIAL":
            return u32(50)
        if verdict == "FAIL":
            return u32(0)
        raise gl.vm.UserError("Invalid verdict")

    def _refund_creator(self, dispute_id: u32, status: str) -> None:
        amount = self.amounts[dispute_id]
        self.statuses[dispute_id] = status
        self.creator_refunds[dispute_id] = amount
        if amount > u256(0):
            _Recipient(self.creators[dispute_id]).emit_transfer(value=amount)

    @gl.public.write.payable
    def create_dispute(self, title: str, requirements: str, provider: str, deadline: str) -> u32:
        amount = gl.message.value

        if amount == u256(0):
            raise gl.vm.UserError("Dispute must contain GEN escrow")
        if not title.strip():
            raise gl.vm.UserError("Title is required")
        if not requirements.strip():
            raise gl.vm.UserError("Requirements are required")

        provider_address = Address(provider)
        if provider_address == self._zero_address():
            raise gl.vm.UserError("Provider address is required")
        if provider_address == gl.message.sender_address:
            raise gl.vm.UserError("Creator and provider must be different")
        if not self._is_before_deadline(deadline):
            raise gl.vm.UserError("Deadline must be in the future")

        dispute_id = u32(len(self.titles))
        now = self._now_iso()

        self.creators.append(gl.message.sender_address)
        self.providers.append(provider_address)
        self.titles.append(title)
        self.requirements.append(requirements)
        self.submission_urls.append("")
        self.submission_commits.append("")
        self.amounts.append(amount)
        self.statuses.append("OPEN")
        self.deadlines.append(deadline)
        self.created_at.append(now)
        self.submitted_at.append("")
        self.recovery_deadlines.append("")
        self.resolved_at.append("")
        self.scores.append(u32(0))
        self.verdicts.append("")
        self.explanations.append("")
        self.provider_payouts.append(u256(0))
        self.creator_refunds.append(u256(0))

        return dispute_id

    @gl.public.write
    def submit_dispute(self, dispute_id: u32, submission_url: str) -> None:
        self._require_valid_id(dispute_id)

        if self.statuses[dispute_id] != "OPEN":
            raise gl.vm.UserError("Dispute is not open")
        if gl.message.sender_address != self.providers[dispute_id]:
            raise gl.vm.UserError("Only the designated provider can submit")
        if not self._is_before_deadline(self.deadlines[dispute_id]):
            raise gl.vm.UserError("Submission deadline has passed")

        commit_sha = self._validate_evidence_url(submission_url)
        submitted_at = self._now_iso()
        recovery_at = datetime.fromtimestamp(
            self._now_timestamp() + RECOVERY_WINDOW_SECONDS,
            timezone.utc,
        ).isoformat()

        # The URL is immutable because it is pinned to the commit SHA.
        # Evaluation always fetches this exact stored reference.
        self.submission_urls[dispute_id] = submission_url.strip()
        self.submission_commits[dispute_id] = commit_sha
        self.submitted_at[dispute_id] = submitted_at
        self.recovery_deadlines[dispute_id] = recovery_at
        self.statuses[dispute_id] = "SUBMITTED"

    @gl.public.write
    def cancel_dispute(self, dispute_id: u32) -> None:
        self._require_valid_id(dispute_id)
        if self.statuses[dispute_id] != "OPEN":
            raise gl.vm.UserError("Only open disputes can be cancelled")
        if gl.message.sender_address != self.creators[dispute_id]:
            raise gl.vm.UserError("Only the creator can cancel")
        self._refund_creator(dispute_id, "REFUNDED")

    @gl.public.write
    def expire_dispute(self, dispute_id: u32) -> None:
        self._require_valid_id(dispute_id)
        if self.statuses[dispute_id] != "OPEN":
            raise gl.vm.UserError("Only open disputes can expire")
        if not self._is_after_deadline(self.deadlines[dispute_id]):
            raise gl.vm.UserError("Deadline has not passed")
        self._refund_creator(dispute_id, "EXPIRED")

    @gl.public.write
    def recover_submitted(self, dispute_id: u32) -> None:
        """Permissionless deterministic recovery after the evaluation window.

        Failed consensus/retrieval transactions revert and therefore leave the
        dispute SUBMITTED. After the fixed recovery window, anyone can refund
        the creator, so escrow cannot remain locked forever.
        """
        self._require_valid_id(dispute_id)

        if self.statuses[dispute_id] != "SUBMITTED":
            raise gl.vm.UserError("Dispute is not awaiting evaluation")
        if not self._is_after_deadline(self.recovery_deadlines[dispute_id]):
            raise gl.vm.UserError("Evaluation recovery window has not expired")

        self._refund_creator(dispute_id, "RECOVERED")

    @gl.public.write
    def evaluate_submission(self, dispute_id: u32) -> None:
        self._require_valid_id(dispute_id)

        if self.statuses[dispute_id] != "SUBMITTED":
            raise gl.vm.UserError("Dispute has not been submitted")
        if self._is_after_deadline(self.recovery_deadlines[dispute_id]):
            raise gl.vm.UserError("Evaluation window expired; recover the escrow")

        title = self.titles[dispute_id]
        requirements = self.requirements[dispute_id]
        submission_url = self.submission_urls[dispute_id]
        expected_commit = self.submission_commits[dispute_id]

        if not expected_commit:
            raise gl.vm.UserError("Immutable evidence reference is missing")

        def fetch_evidence():
            response = gl.nondet.web.get(submission_url)

            # Fail closed on every response condition the adjudication relies on.
            if response.status_code != 200:
                raise gl.vm.UserError("Evidence retrieval returned a non-success status")

            body = response.body
            if body is None or len(body) == 0:
                raise gl.vm.UserError("Evidence response is empty")
            if len(body) > MAX_EVIDENCE_BYTES:
                raise gl.vm.UserError("Evidence response exceeds the 12000-byte limit")

            try:
                content = body.decode("utf-8")
            except Exception:
                raise gl.vm.UserError("Evidence response is not valid UTF-8")

            if not content.strip():
                raise gl.vm.UserError("Evidence response is empty")

            return content

        def evaluate():
            content = fetch_evidence()

            prompt = f"""
You are an independent adjudicator for an agent-to-agent service agreement.

SERVICE TITLE:
{title}

ACCEPTANCE REQUIREMENTS:
{requirements}

IMMUTABLE EVIDENCE COMMIT:
{expected_commit}

IMMUTABLE EVIDENCE URL:
{submission_url}

SUBMITTED EVIDENCE CONTENT:
{content}

Determine whether the submitted work satisfies the stated acceptance requirements.
Evaluate only the explicit requirements. Do not invent requirements.
If evidence is insufficient, ambiguous, unavailable, or does not support completion,
choose FAIL rather than assuming compliance.

Return ONLY JSON with:
{
  "verdict": "PASS" | "PARTIAL" | "FAIL",
  "explanation": "short factual explanation"
}

PAYOUT TIERS ARE FIXED:
PASS = 100% provider payout.
PARTIAL = 50% provider payout and 50% creator refund.
FAIL = 0% provider payout and 100% creator refund.
Do not return a score. The contract derives the score deterministically from verdict.
"""

            result = gl.nondet.exec_prompt(prompt, response_format="json")

            if not isinstance(result, dict):
                raise gl.vm.UserError("Malformed adjudication response")

            verdict = str(result.get("verdict", "")).upper()
            explanation = str(result.get("explanation", ""))

            if verdict not in ["PASS", "PARTIAL", "FAIL"]:
                raise gl.vm.UserError("Invalid verdict")
            if not explanation.strip():
                raise gl.vm.UserError("Explanation is required")

            return {"verdict": verdict, "explanation": explanation}

        def leader_fn():
            return evaluate()

        def validator_fn(leader_result):
            if not isinstance(leader_result, gl.vm.Return):
                return False

            leader_data = leader_result.calldata
            if not isinstance(leader_data, dict):
                return False

            try:
                validator_data = evaluate()
            except Exception:
                return False

            if not isinstance(validator_data, dict):
                return False

            # Exact agreement on the payout-driving tier.
            return leader_data.get("verdict") == validator_data.get("verdict")

        # Keep status SUBMITTED until consensus succeeds. If retrieval or
        # consensus fails, the whole transaction reverts and the escrow remains
        # recoverable through recover_submitted().
        result = gl.vm.run_nondet_unsafe(leader_fn, validator_fn)

        verdict = result["verdict"]
        explanation = result["explanation"]
        score = self._score_for_verdict(verdict)

        self.scores[dispute_id] = score
        self.verdicts[dispute_id] = verdict
        self.explanations[dispute_id] = explanation
        self.resolved_at[dispute_id] = self._now_iso()

        amount = self.amounts[dispute_id]

        if verdict == "PASS":
            self.statuses[dispute_id] = "PAID"
            self.provider_payouts[dispute_id] = amount
            if amount > u256(0):
                _Recipient(self.providers[dispute_id]).emit_transfer(value=amount)

        elif verdict == "FAIL":
            self.statuses[dispute_id] = "REFUNDED"
            self.creator_refunds[dispute_id] = amount
            if amount > u256(0):
                _Recipient(self.creators[dispute_id]).emit_transfer(value=amount)

        else:
            self.statuses[dispute_id] = "PARTIAL"

    @gl.public.write
    def settle_partial(self, dispute_id: u32) -> None:
        self._require_valid_id(dispute_id)

        if self.statuses[dispute_id] != "PARTIAL":
            raise gl.vm.UserError("Dispute is not awaiting partial settlement")
        if self.verdicts[dispute_id] != "PARTIAL" or self.scores[dispute_id] != u32(50):
            raise gl.vm.UserError("Invalid partial adjudication")

        amount = self.amounts[dispute_id]
        provider_amount = amount // u256(2)
        creator_amount = amount - provider_amount

        self.provider_payouts[dispute_id] = provider_amount
        self.creator_refunds[dispute_id] = creator_amount
        self.statuses[dispute_id] = "PARTIAL_SETTLED"

        if provider_amount > u256(0):
            _Recipient(self.providers[dispute_id]).emit_transfer(value=provider_amount)
        if creator_amount > u256(0):
            _Recipient(self.creators[dispute_id]).emit_transfer(value=creator_amount)

    @gl.public.view
    def get_dispute(self, dispute_id: u32):
        self._require_valid_id(dispute_id)
        return {
            "id": dispute_id,
            "creator": str(self.creators[dispute_id]),
            "provider": str(self.providers[dispute_id]),
            "title": self.titles[dispute_id],
            "requirements": self.requirements[dispute_id],
            "submission_url": self.submission_urls[dispute_id],
            "submission_commit": self.submission_commits[dispute_id],
            "amount": self.amounts[dispute_id],
            "status": self.statuses[dispute_id],
            "deadline": self.deadlines[dispute_id],
            "created_at": self.created_at[dispute_id],
            "submitted_at": self.submitted_at[dispute_id],
            "recovery_deadline": self.recovery_deadlines[dispute_id],
            "resolved_at": self.resolved_at[dispute_id],
            "score": self.scores[dispute_id],
            "verdict": self.verdicts[dispute_id],
            "explanation": self.explanations[dispute_id],
            "provider_payout": self.provider_payouts[dispute_id],
            "creator_refund": self.creator_refunds[dispute_id],
        }

    @gl.public.view
    def get_dispute_count(self) -> u32:
        return u32(len(self.titles))

    @gl.public.view
    def get_status(self, dispute_id: u32) -> str:
        self._require_valid_id(dispute_id)
        return self.statuses[dispute_id]

    @gl.public.view
    def get_score(self, dispute_id: u32) -> u32:
        self._require_valid_id(dispute_id)
        return self.scores[dispute_id]

    @gl.public.view
    def get_verdict(self, dispute_id: u32) -> str:
        self._require_valid_id(dispute_id)
        return self.verdicts[dispute_id]

    @gl.public.view
    def get_explanation(self, dispute_id: u32) -> str:
        self._require_valid_id(dispute_id)
        return self.explanations[dispute_id]

    @gl.public.view
    def get_contract_balance(self) -> u256:
        return self.balance
