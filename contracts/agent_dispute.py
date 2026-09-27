# { "Depends": "py-genlayer:1jb45aa8ynh2a9c9xn3b7qqh8sm5q93hwfp7jqmwsfhh8jpz09h6" }

from genlayer import *
from datetime import datetime, timezone
import json


@gl.evm.contract_interface
class _Recipient:
    class View:
        pass

    class Write:
        pass


class AgentDispute(gl.Contract):
    # Participants
    creators: DynArray[Address]
    providers: DynArray[Address]

    # Agreement
    titles: DynArray[str]
    requirements: DynArray[str]

    # Evidence
    submission_urls: DynArray[str]

    # Escrow
    amounts: DynArray[u256]

    # Lifecycle
    statuses: DynArray[str]

    # Timing
    deadlines: DynArray[str]
    created_at: DynArray[str]
    submitted_at: DynArray[str]
    resolved_at: DynArray[str]

    # Adjudication
    scores: DynArray[u32]
    verdicts: DynArray[str]
    explanations: DynArray[str]

    # Result settlement
    provider_payouts: DynArray[u256]
    creator_refunds: DynArray[u256]

    def __init__(self):
        pass

    # ---------------------------------------------------------
    # Internal helpers
    # ---------------------------------------------------------

    def _zero_address(self) -> Address:
        return Address(
            "0x0000000000000000000000000000000000000000"
        )

    def _now_iso(self) -> str:
        return datetime.now(timezone.utc).isoformat()

    def _deadline_timestamp(self, deadline: str) -> int:
        try:
            parsed = datetime.fromisoformat(
                deadline.replace("Z", "+00:00")
            )

            if parsed.tzinfo is None:
                parsed = parsed.replace(tzinfo=timezone.utc)

            return int(parsed.timestamp())

        except Exception:
            raise gl.vm.UserError(
                "Invalid deadline. Use an ISO 8601 datetime."
            )

    def _is_before_deadline(self, deadline: str) -> bool:
        deadline_ts = self._deadline_timestamp(deadline)

        now_ts = int(
            datetime.now(timezone.utc).timestamp()
        )

        return now_ts < deadline_ts

    def _is_after_deadline(self, deadline: str) -> bool:
        deadline_ts = self._deadline_timestamp(deadline)

        now_ts = int(
            datetime.now(timezone.utc).timestamp()
        )

        return now_ts >= deadline_ts

    def _validate_evidence_url(self, url: str) -> None:
        if not url.strip():
            raise gl.vm.UserError(
                "Submission URL is required"
            )

        allowed = (
            url.startswith("https://github.com/")
            or url.startswith("https://www.github.com/")
            or url.startswith("https://raw.githubusercontent.com/")
            or url.startswith("https://vercel.app/")
        )

        if not allowed:
            raise gl.vm.UserError(
                "Evidence must be a GitHub, raw GitHub, or Vercel URL"
            )

    def _require_valid_id(self, dispute_id: u32) -> None:
        if dispute_id >= u32(len(self.titles)):
            raise gl.vm.UserError(
                "Dispute does not exist"
            )

    # ---------------------------------------------------------
    # 1. CREATE DISPUTE / AGREEMENT
    # ---------------------------------------------------------

    @gl.public.write.payable
    def create_dispute(
        self,
        title: str,
        requirements: str,
        provider: str,
        deadline: str
    ) -> u32:

        amount = gl.message.value

        if amount == u256(0):
            raise gl.vm.UserError(
                "Dispute must contain GEN escrow"
            )

        if not title.strip():
            raise gl.vm.UserError(
                "Title is required"
            )

        if not requirements.strip():
            raise gl.vm.UserError(
                "Requirements are required"
            )

        provider_address = Address(provider)

        if provider_address == self._zero_address():
            raise gl.vm.UserError(
                "Provider address is required"
            )

        if provider_address == gl.message.sender_address:
            raise gl.vm.UserError(
                "Creator and provider must be different"
            )

        if not self._is_before_deadline(deadline):
            raise gl.vm.UserError(
                "Deadline must be in the future"
            )

        dispute_id = u32(len(self.titles))

        now = self._now_iso()

        self.creators.append(
            gl.message.sender_address
        )

        self.providers.append(
            provider_address
        )

        self.titles.append(title)
        self.requirements.append(requirements)

        self.submission_urls.append("")

        self.amounts.append(amount)

        self.statuses.append("OPEN")

        self.deadlines.append(deadline)

        self.created_at.append(now)
        self.submitted_at.append("")
        self.resolved_at.append("")

        self.scores.append(u32(0))
        self.verdicts.append("")
        self.explanations.append("")

        self.provider_payouts.append(
            u256(0)
        )

        self.creator_refunds.append(
            u256(0)
        )

        return dispute_id

    # ---------------------------------------------------------
    # 2. SUBMIT WORK / EVIDENCE
    # ---------------------------------------------------------

    @gl.public.write
    def submit_dispute(
        self,
        dispute_id: u32,
        submission_url: str
    ) -> None:

        self._require_valid_id(dispute_id)

        if self.statuses[dispute_id] != "OPEN":
            raise gl.vm.UserError(
                "Dispute is not open"
            )

        if (
            gl.message.sender_address
            != self.providers[dispute_id]
        ):
            raise gl.vm.UserError(
                "Only the designated provider can submit"
            )

        if not self._is_before_deadline(
            self.deadlines[dispute_id]
        ):
            raise gl.vm.UserError(
                "Submission deadline has passed"
            )

        self._validate_evidence_url(
            submission_url
        )

        self.submission_urls[dispute_id] = (
            submission_url
        )

        self.submitted_at[dispute_id] = (
            self._now_iso()
        )

        self.statuses[dispute_id] = (
            "SUBMITTED"
        )

    # ---------------------------------------------------------
    # 3. CANCEL BEFORE SUBMISSION
    # ---------------------------------------------------------

    @gl.public.write
    def cancel_dispute(
        self,
        dispute_id: u32
    ) -> None:

        self._require_valid_id(dispute_id)

        if self.statuses[dispute_id] != "OPEN":
            raise gl.vm.UserError(
                "Only open disputes can be cancelled"
            )

        if (
            gl.message.sender_address
            != self.creators[dispute_id]
        ):
            raise gl.vm.UserError(
                "Only the creator can cancel"
            )

        amount = self.amounts[dispute_id]

        self.statuses[dispute_id] = (
            "REFUNDED"
        )

        self.creator_refunds[dispute_id] = (
            amount
        )

        # Mark state before emitting the transfer.
        if amount > u256(0):
            _Recipient(
                self.creators[dispute_id]
            ).emit_transfer(
                value=amount
            )

    # ---------------------------------------------------------
    # 4. EXPIRE UN-SUBMITTED DISPUTE
    # ---------------------------------------------------------

    @gl.public.write
    def expire_dispute(
        self,
        dispute_id: u32
    ) -> None:

        self._require_valid_id(dispute_id)

        if self.statuses[dispute_id] != "OPEN":
            raise gl.vm.UserError(
                "Only open disputes can expire"
            )

        if not self._is_after_deadline(
            self.deadlines[dispute_id]
        ):
            raise gl.vm.UserError(
                "Deadline has not passed"
            )

        amount = self.amounts[dispute_id]

        self.statuses[dispute_id] = (
            "EXPIRED"
        )

        self.creator_refunds[dispute_id] = (
            amount
        )

        if amount > u256(0):
            _Recipient(
                self.creators[dispute_id]
            ).emit_transfer(
                value=amount
            )

    # ---------------------------------------------------------
    # 5. EVALUATE SUBMISSION
    # ---------------------------------------------------------

    @gl.public.write
    def evaluate_submission(
        self,
        dispute_id: u32
    ) -> None:

        self._require_valid_id(dispute_id)

        if self.statuses[dispute_id] != "SUBMITTED":
            raise gl.vm.UserError(
                "Dispute has not been submitted"
            )

        title = self.titles[dispute_id]
        requirements = self.requirements[dispute_id]
        submission_url = self.submission_urls[dispute_id]

        provider = self.providers[dispute_id]

        if provider == self._zero_address():
            raise gl.vm.UserError(
                "Provider is not bound"
            )

        self.statuses[dispute_id] = (
            "EVALUATING"
        )

        def evaluate():

            response = gl.nondet.web.get(
                submission_url
            )

            content = response.body.decode(
                "utf-8"
            )

            # Prevent excessively large pages from
            # consuming unnecessary evaluation resources.
            content = content[:12000]

            prompt = f"""
You are an independent adjudicator for an
agent-to-agent service agreement.

SERVICE TITLE:
{title}

ACCEPTANCE REQUIREMENTS:
{requirements}

SUBMITTED EVIDENCE URL:
{submission_url}

SUBMITTED EVIDENCE:
{content}

Determine whether the submitted work satisfies
the stated acceptance requirements.

IMPORTANT RULES:

1. Evaluate only the requirements explicitly provided.
2. Do not invent additional requirements.
3. Use only the submitted evidence.
4. If evidence is insufficient or ambiguous,
   do not assume the requirement was satisfied.
5. The score must reflect the actual degree of
   compliance with the stated requirements.

Return ONLY a JSON object with:

{{
  "verdict": "PASS" | "PARTIAL" | "FAIL",
  "score": integer from 0 to 100,
  "explanation": "short factual explanation"
}}

SCORING:

PASS:
The important requirements are satisfied.
Score should normally be 80-100.

PARTIAL:
Some important requirements are satisfied,
but one or more meaningful requirements are
missing or incomplete.
Score should normally be 40-79.

FAIL:
The core requirements are not satisfied or
the evidence does not support completion.
Score should normally be 0-39.
"""

            result = gl.nondet.exec_prompt(
                prompt,
                response_format="json"
            )

            if not isinstance(result, dict):
                raise gl.vm.UserError(
                    "Invalid adjudication response"
                )

            verdict = str(
                result.get("verdict", "")
            ).upper()

            score = int(
                result.get("score", -1)
            )

            explanation = str(
                result.get("explanation", "")
            )

            if verdict not in [
                "PASS",
                "PARTIAL",
                "FAIL"
            ]:
                raise gl.vm.UserError(
                    "Invalid verdict"
                )

            if score < 0 or score > 100:
                raise gl.vm.UserError(
                    "Invalid score"
                )

            if not explanation.strip():
                raise gl.vm.UserError(
                    "Explanation is required"
                )

            # Keep verdict and score logically aligned.
            if verdict == "PASS" and score < 80:
                raise gl.vm.UserError(
                    "PASS requires score >= 80"
                )

            if verdict == "PARTIAL":
                if score < 40 or score >= 80:
                    raise gl.vm.UserError(
                        "PARTIAL requires score 40-79"
                    )

            if verdict == "FAIL" and score >= 40:
                raise gl.vm.UserError(
                    "FAIL requires score < 40"
                )

            return {
                "verdict": verdict,
                "score": score,
                "explanation": explanation
            }

        def leader_fn():
            return evaluate()

        def validator_fn(leader_result):

            if not isinstance(
                leader_result,
                gl.vm.Return
            ):
                return False

            leader_data = (
                leader_result.calldata
            )

            try:
                validator_data = evaluate()
            except Exception:
                return False

            if not isinstance(
                validator_data,
                dict
            ):
                return False

            # The core adjudication must agree.
            if (
                leader_data["verdict"]
                != validator_data["verdict"]
            ):
                return False

            leader_score = int(
                leader_data["score"]
            )

            validator_score = int(
                validator_data["score"]
            )

            # Scores are subjective, so allow a
            # controlled tolerance.
            if abs(
                leader_score
                - validator_score
            ) > 15:
                return False

            # Make sure both results obey the
            # deterministic score/verdict rules.
            if (
                leader_data["verdict"] == "PASS"
                and leader_score < 80
            ):
                return False

            if (
                leader_data["verdict"] == "FAIL"
                and leader_score >= 40
            ):
                return False

            if (
                leader_data["verdict"] == "PARTIAL"
                and (
                    leader_score < 40
                    or leader_score >= 80
                )
            ):
                return False

            return True

        result = gl.vm.run_nondet_unsafe(
            leader_fn,
            validator_fn
        )

        # Everything below this point is deterministic.
        # Storage writes and transfers must happen
        # after consensus has produced an agreed result.

        verdict = result["verdict"]
        score = u32(result["score"])
        explanation = result["explanation"]

        self.scores[dispute_id] = score
        self.verdicts[dispute_id] = verdict
        self.explanations[dispute_id] = explanation
        self.resolved_at[dispute_id] = (
            self._now_iso()
        )

        amount = self.amounts[dispute_id]

        if verdict == "PASS":

            self.statuses[dispute_id] = (
                "PAID"
            )

            payout = amount

            self.provider_payouts[dispute_id] = (
                payout
            )

            if payout > u256(0):
                _Recipient(
                    self.providers[dispute_id]
                ).emit_transfer(
                    value=payout
                )

        elif verdict == "FAIL":

            self.statuses[dispute_id] = (
                "REFUNDED"
            )

            refund = amount

            self.creator_refunds[dispute_id] = (
                refund
            )

            if refund > u256(0):
                _Recipient(
                    self.creators[dispute_id]
                ).emit_transfer(
                    value=refund
                )

        else:

            self.statuses[dispute_id] = (
                "PARTIAL"
            )

    # ---------------------------------------------------------
    # 6. SETTLE PARTIAL RESULT
    # ---------------------------------------------------------

    @gl.public.write
    def settle_partial(
        self,
        dispute_id: u32
    ) -> None:

        self._require_valid_id(dispute_id)

        if self.statuses[dispute_id] != "PARTIAL":
            raise gl.vm.UserError(
                "Dispute is not awaiting partial settlement"
            )

        score = self.scores[dispute_id]

        if score < u32(40) or score >= u32(80):
            raise gl.vm.UserError(
                "Invalid partial score"
            )

        amount = self.amounts[dispute_id]

        # Provider receives the percentage represented
        # by the adjudicated score.
        provider_amount = (
            amount * u256(score)
        ) // u256(100)

        creator_amount = (
            amount - provider_amount
        )

        self.provider_payouts[dispute_id] = (
            provider_amount
        )

        self.creator_refunds[dispute_id] = (
            creator_amount
        )

        # Update state BEFORE transfers.
        self.statuses[dispute_id] = (
            "PARTIAL_SETTLED"
        )

        if provider_amount > u256(0):
            _Recipient(
                self.providers[dispute_id]
            ).emit_transfer(
                value=provider_amount
            )

        if creator_amount > u256(0):
            _Recipient(
                self.creators[dispute_id]
            ).emit_transfer(
                value=creator_amount
            )

    # ---------------------------------------------------------
    # 7. READ COMPLETE DISPUTE
    # ---------------------------------------------------------

    @gl.public.view
    def get_dispute(
        self,
        dispute_id: u32
    ):
        self._require_valid_id(dispute_id)

        return {
            "id": dispute_id,

            "creator": str(
                self.creators[dispute_id]
            ),

            "provider": str(
                self.providers[dispute_id]
            ),

            "title": self.titles[dispute_id],

            "requirements": (
                self.requirements[dispute_id]
            ),

            "submission_url": (
                self.submission_urls[dispute_id]
            ),

            "amount": (
                self.amounts[dispute_id]
            ),

            "status": (
                self.statuses[dispute_id]
            ),

            "deadline": (
                self.deadlines[dispute_id]
            ),

            "created_at": (
                self.created_at[dispute_id]
            ),

            "submitted_at": (
                self.submitted_at[dispute_id]
            ),

            "resolved_at": (
                self.resolved_at[dispute_id]
            ),

            "score": (
                self.scores[dispute_id]
            ),

            "verdict": (
                self.verdicts[dispute_id]
            ),

            "explanation": (
                self.explanations[dispute_id]
            ),

            "provider_payout": (
                self.provider_payouts[dispute_id]
            ),

            "creator_refund": (
                self.creator_refunds[dispute_id]
            )
        }

    # ---------------------------------------------------------
    # 8. BASIC READ METHODS
    # ---------------------------------------------------------

    @gl.public.view
    def get_dispute_count(self) -> u32:
        return u32(len(self.titles))

    @gl.public.view
    def get_status(
        self,
        dispute_id: u32
    ) -> str:

        self._require_valid_id(dispute_id)

        return self.statuses[dispute_id]

    @gl.public.view
    def get_score(
        self,
        dispute_id: u32
    ) -> u32:

        self._require_valid_id(dispute_id)

        return self.scores[dispute_id]

    @gl.public.view
    def get_verdict(
        self,
        dispute_id: u32
    ) -> str:

        self._require_valid_id(dispute_id)

        return self.verdicts[dispute_id]

    @gl.public.view
    def get_explanation(
        self,
        dispute_id: u32
    ) -> str:

        self._require_valid_id(dispute_id)

        return self.explanations[dispute_id]

    @gl.public.view
    def get_contract_balance(self) -> u256:
        return self.balance