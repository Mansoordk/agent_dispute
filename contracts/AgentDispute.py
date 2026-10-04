# { "Depends": "py-genlayer:1jb45aa8ynh2a9c9xn3b7qqh8sm5q93hwfp7jqmwsfhh8jpz09h6" }

from genlayer import *
from datetime import datetime, timezone


@gl.evm.contract_interface
class _Recipient:
    class View:
        pass

    class Write:
        pass


MAX_EVIDENCE_BYTES = 200000
RECOVERY_WINDOW_SECONDS = 86400


class AgentDispute(gl.Contract):

    # =========================================================
    # PARTICIPANTS
    # =========================================================

    creators: DynArray[Address]
    providers: DynArray[Address]

    # =========================================================
    # AGREEMENT
    # =========================================================

    titles: DynArray[str]
    requirements: DynArray[str]

    # =========================================================
    # EVIDENCE
    # =========================================================

    # Evidence must be pinned to immutable raw GitHub content.
    submission_urls: DynArray[str]
    submission_commits: DynArray[str]

    # =========================================================
    # ESCROW
    # =========================================================

    amounts: DynArray[u256]

    # =========================================================
    # LIFECYCLE
    # =========================================================

    statuses: DynArray[str]

    # =========================================================
    # TIMING
    # =========================================================

    deadlines: DynArray[str]
    created_at: DynArray[str]
    submitted_at: DynArray[str]
    recovery_deadlines: DynArray[str]
    resolved_at: DynArray[str]

    # =========================================================
    # ADJUDICATION
    # =========================================================

    # Deterministic payout score:
    #
    # PASS    = 100
    # PARTIAL = 50
    # FAIL    = 0

    scores: DynArray[u32]
    verdicts: DynArray[str]
    explanations: DynArray[str]

    # =========================================================
    # SETTLEMENT
    # =========================================================

    provider_payouts: DynArray[u256]
    creator_refunds: DynArray[u256]

    def __init__(self):
        pass

    # =========================================================
    # INTERNAL HELPERS
    # =========================================================

    def _zero_address(self) -> Address:
        return Address(
            "0x0000000000000000000000000000000000000000"
        )

    def _now_iso(self) -> str:
        return datetime.now(
            timezone.utc
        ).isoformat()

    def _now_timestamp(self) -> int:
        return int(
            datetime.now(
                timezone.utc
            ).timestamp()
        )

    def _deadline_timestamp(
        self,
        value: str
    ) -> int:

        try:
            parsed = datetime.fromisoformat(
                value.replace(
                    "Z",
                    "+00:00"
                )
            )

            if parsed.tzinfo is None:
                parsed = parsed.replace(
                    tzinfo=timezone.utc
                )

            return int(
                parsed.timestamp()
            )

        except Exception:
            raise gl.vm.UserError(
                "Invalid deadline. Use an ISO 8601 datetime."
            )

    def _is_before_deadline(
        self,
        deadline: str
    ) -> bool:

        return (
            self._now_timestamp()
            < self._deadline_timestamp(
                deadline
            )
        )

    def _is_after_deadline(
        self,
        deadline: str
    ) -> bool:

        return (
            self._now_timestamp()
            >= self._deadline_timestamp(
                deadline
            )
        )

    def _is_hex_sha(
        self,
        value: str
    ) -> bool:

        if len(value) != 40:
            return False

        for ch in value.lower():

            if ch not in "0123456789abcdef":
                return False

        return True

    def _extract_commit_sha(
        self,
        url: str
    ) -> str:

        cleaned = url.strip()

        parts = cleaned.split("/")

        # =====================================================
        # RAW GITHUB URL ONLY
        #
        # https://raw.githubusercontent.com/OWNER/REPO/SHA/PATH
        #
        # Example:
        #
        # https://raw.githubusercontent.com/
        # Mansoordk/agentescrow-genlayer/
        # 70456f90f4210d092f3bf1a45a3794f0f8705601/
        # app/page.js
        #
        # =====================================================

        if (
            len(parts) >= 7
            and parts[0] == "https:"
            and parts[2] == "raw.githubusercontent.com"
        ):

            sha = (
                parts[5]
                .split("?")[0]
                .split("#")[0]
            )

            if self._is_hex_sha(sha):
                return sha.lower()

        # GitHub UI commit pages are intentionally rejected.
        #
        # This prevents evidence from being the large GitHub
        # HTML interface instead of the actual source content.

        raise gl.vm.UserError(
            "Evidence must be an HTTPS raw.githubusercontent.com "
            "URL pinned to a full 40-character Git commit SHA"
        )

    def _validate_evidence_url(
        self,
        url: str
    ) -> str:

        cleaned = url.strip()

        if not cleaned:
            raise gl.vm.UserError(
                "Submission URL is required"
            )

        if not cleaned.startswith("https://"):
            raise gl.vm.UserError(
                "Evidence URL must use HTTPS"
            )

        return self._extract_commit_sha(
            cleaned
        )

    def _require_valid_id(
        self,
        dispute_id: u32
    ) -> None:

        if dispute_id >= u32(
            len(self.titles)
        ):
            raise gl.vm.UserError(
                "Dispute does not exist"
            )

    def _score_for_verdict(
        self,
        verdict: str
    ) -> u32:

        if verdict == "PASS":
            return u32(100)

        if verdict == "PARTIAL":
            return u32(50)

        if verdict == "FAIL":
            return u32(0)

        raise gl.vm.UserError(
            "Invalid verdict"
        )

    def _refund_creator(
        self,
        dispute_id: u32,
        status: str
    ) -> None:

        amount = self.amounts[
            dispute_id
        ]

        self.statuses[
            dispute_id
        ] = status

        self.creator_refunds[
            dispute_id
        ] = amount

        if amount > u256(0):

            _Recipient(
                self.creators[
                    dispute_id
                ]
            ).emit_transfer(
                value=amount
            )

    # =========================================================
    # CREATE DISPUTE
    # =========================================================

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

        try:
            provider_address = Address(
                provider
            )
        except Exception:
            raise gl.vm.UserError(
                "Invalid provider address"
            )

        if (
            provider_address
            == self._zero_address()
        ):
            raise gl.vm.UserError(
                "Provider address is required"
            )

        if (
            provider_address
            == gl.message.sender_address
        ):
            raise gl.vm.UserError(
                "Creator and provider must be different"
            )

        if not self._is_before_deadline(
            deadline
        ):
            raise gl.vm.UserError(
                "Deadline must be in the future"
            )

        dispute_id = u32(
            len(self.titles)
        )

        now = self._now_iso()

        self.creators.append(
            gl.message.sender_address
        )

        self.providers.append(
            provider_address
        )

        self.titles.append(
            title.strip()
        )

        self.requirements.append(
            requirements.strip()
        )

        self.submission_urls.append(
            ""
        )

        self.submission_commits.append(
            ""
        )

        self.amounts.append(
            amount
        )

        self.statuses.append(
            "OPEN"
        )

        self.deadlines.append(
            deadline
        )

        self.created_at.append(
            now
        )

        self.submitted_at.append(
            ""
        )

        self.recovery_deadlines.append(
            ""
        )

        self.resolved_at.append(
            ""
        )

        self.scores.append(
            u32(0)
        )

        self.verdicts.append(
            ""
        )

        self.explanations.append(
            ""
        )

        self.provider_payouts.append(
            u256(0)
        )

        self.creator_refunds.append(
            u256(0)
        )

        return dispute_id

    # =========================================================
    # SUBMIT EVIDENCE
    # =========================================================

    @gl.public.write
    def submit_dispute(
        self,
        dispute_id: u32,
        submission_url: str
    ) -> None:

        self._require_valid_id(
            dispute_id
        )

        if (
            self.statuses[
                dispute_id
            ]
            != "OPEN"
        ):
            raise gl.vm.UserError(
                "Dispute is not open"
            )

        if (
            gl.message.sender_address
            != self.providers[
                dispute_id
            ]
        ):
            raise gl.vm.UserError(
                "Only the designated provider can submit"
            )

        if not self._is_before_deadline(
            self.deadlines[
                dispute_id
            ]
        ):
            raise gl.vm.UserError(
                "Submission deadline has passed"
            )

        cleaned_url = submission_url.strip()

        commit_sha = (
            self._validate_evidence_url(
                cleaned_url
            )
        )

        submitted_at = self._now_iso()

        recovery_at = (
            datetime.fromtimestamp(
                self._now_timestamp()
                + RECOVERY_WINDOW_SECONDS,
                timezone.utc
            ).isoformat()
        )

        # Store immutable commit-pinned URL.
        self.submission_urls[
            dispute_id
        ] = cleaned_url

        self.submission_commits[
            dispute_id
        ] = commit_sha

        self.submitted_at[
            dispute_id
        ] = submitted_at

        self.recovery_deadlines[
            dispute_id
        ] = recovery_at

        self.statuses[
            dispute_id
        ] = "SUBMITTED"

    # =========================================================
    # CANCEL
    # =========================================================

    @gl.public.write
    def cancel_dispute(
        self,
        dispute_id: u32
    ) -> None:

        self._require_valid_id(
            dispute_id
        )

        if (
            self.statuses[
                dispute_id
            ]
            != "OPEN"
        ):
            raise gl.vm.UserError(
                "Only open disputes can be cancelled"
            )

        if (
            gl.message.sender_address
            != self.creators[
                dispute_id
            ]
        ):
            raise gl.vm.UserError(
                "Only the creator can cancel"
            )

        self._refund_creator(
            dispute_id,
            "REFUNDED"
        )

    # =========================================================
    # EXPIRE
    # =========================================================

    @gl.public.write
    def expire_dispute(
        self,
        dispute_id: u32
    ) -> None:

        self._require_valid_id(
            dispute_id
        )

        if (
            self.statuses[
                dispute_id
            ]
            != "OPEN"
        ):
            raise gl.vm.UserError(
                "Only open disputes can expire"
            )

        if not self._is_after_deadline(
            self.deadlines[
                dispute_id
            ]
        ):
            raise gl.vm.UserError(
                "Deadline has not passed"
            )

        self._refund_creator(
            dispute_id,
            "EXPIRED"
        )

    # =========================================================
    # RECOVERY
    # =========================================================

    @gl.public.write
    def recover_submitted(
        self,
        dispute_id: u32
    ) -> None:

        self._require_valid_id(
            dispute_id
        )

        if (
            self.statuses[
                dispute_id
            ]
            != "SUBMITTED"
        ):
            raise gl.vm.UserError(
                "Dispute is not awaiting evaluation"
            )

        if not self._is_after_deadline(
            self.recovery_deadlines[
                dispute_id
            ]
        ):
            raise gl.vm.UserError(
                "Evaluation recovery window has not expired"
            )

        self._refund_creator(
            dispute_id,
            "RECOVERED"
        )

    # =========================================================
    # EVALUATE SUBMISSION
    # =========================================================

    @gl.public.write
    def evaluate_submission(
        self,
        dispute_id: u32
    ) -> None:

        self._require_valid_id(
            dispute_id
        )

        if (
            self.statuses[
                dispute_id
            ]
            != "SUBMITTED"
        ):
            raise gl.vm.UserError(
                "Dispute has not been submitted"
            )

        if self._is_after_deadline(
            self.recovery_deadlines[
                dispute_id
            ]
        ):
            raise gl.vm.UserError(
                "Evaluation window expired; recover the escrow"
            )

        title = self.titles[
            dispute_id
        ]

        requirements = self.requirements[
            dispute_id
        ]

        submission_url = (
            self.submission_urls[
                dispute_id
            ]
        )

        expected_commit = (
            self.submission_commits[
                dispute_id
            ]
        )

        if not expected_commit:
            raise gl.vm.UserError(
                "Immutable evidence reference is missing"
            )

        # =====================================================
        # FETCH EVIDENCE
        #
        # Studio runtime has confirmed that web.get()
        # provides response.body.
        #
        # We intentionally do NOT use response.status_code.
        #
        # Evidence is:
        # - HTTPS
        # - raw.githubusercontent.com
        # - pinned to a full commit SHA
        # - non-empty
        # - valid UTF-8
        # - <= 200 KB
        # =====================================================

        def fetch_evidence():

            response = gl.nondet.web.get(
                submission_url
            )

            if response is None:
                raise gl.vm.UserError(
                    "Evidence response is unavailable"
                )

            body = response.body

            if body is None:
                raise gl.vm.UserError(
                    "Evidence response is empty"
                )

            if len(body) == 0:
                raise gl.vm.UserError(
                    "Evidence response is empty"
                )

            if len(body) > MAX_EVIDENCE_BYTES:
                raise gl.vm.UserError(
                    "Evidence response exceeds the 200000-byte limit"
                )

            try:
                content = body.decode(
                    "utf-8"
                )
            except Exception:
                raise gl.vm.UserError(
                    "Evidence response is not valid UTF-8"
                )

            if not content.strip():
                raise gl.vm.UserError(
                    "Evidence response is empty"
                )

            return content

        # =====================================================
        # AI EVALUATION
        # =====================================================

        def evaluate():

            content = fetch_evidence()

            prompt = f"""
You are an independent adjudicator for an
agent-to-agent service agreement.

SERVICE TITLE:
{title}

ACCEPTANCE REQUIREMENTS:
{requirements}

IMMUTABLE GITHUB COMMIT:
{expected_commit}

IMMUTABLE EVIDENCE URL:
{submission_url}

SUBMITTED EVIDENCE CONTENT:
{content}

Your task is to determine whether the submitted
work satisfies the explicit acceptance requirements.

Evaluate ONLY the stated requirements.

Do not invent additional requirements.

If the evidence is insufficient, ambiguous,
unavailable, malformed, incomplete, or does not
support completion, choose FAIL.

Return ONLY a JSON object with exactly these fields:

{{
    "verdict": "PASS" | "PARTIAL" | "FAIL",
    "explanation": "short factual explanation"
}}

The payout tiers are deterministic:

PASS:
100 percent provider payout.

PARTIAL:
50 percent provider payout.
50 percent creator refund.

FAIL:
100 percent creator refund.
0 percent provider payout.

Do not return a score.

The contract derives the score deterministically
from the verdict.
"""

            result = gl.nondet.exec_prompt(
                prompt,
                response_format="json"
            )

            if not isinstance(
                result,
                dict
            ):
                raise gl.vm.UserError(
                    "Malformed adjudication response"
                )

            raw_verdict = result.get(
                "verdict",
                ""
            )

            raw_explanation = result.get(
                "explanation",
                ""
            )

            verdict = str(
                raw_verdict
            ).upper().strip()

            explanation = str(
                raw_explanation
            ).strip()

            if verdict not in (
                "PASS",
                "PARTIAL",
                "FAIL"
            ):
                raise gl.vm.UserError(
                    "Invalid verdict"
                )

            if not explanation:
                raise gl.vm.UserError(
                    "Explanation is required"
                )

            return {
                "verdict": verdict,
                "explanation": explanation
            }

        # =====================================================
        # LEADER
        # =====================================================

        def leader_fn():
            return evaluate()

        # =====================================================
        # VALIDATOR
        # =====================================================

        def validator_fn(
            leader_result
        ) -> bool:

            if not isinstance(
                leader_result,
                gl.vm.Return
            ):
                return False

            leader_data = (
                leader_result.calldata
            )

            if not isinstance(
                leader_data,
                dict
            ):
                return False

            leader_verdict = str(
                leader_data.get(
                    "verdict",
                    ""
                )
            ).upper().strip()

            if leader_verdict not in (
                "PASS",
                "PARTIAL",
                "FAIL"
            ):
                return False

            try:
                validator_data = evaluate()
            except Exception:
                return False

            if not isinstance(
                validator_data,
                dict
            ):
                return False

            validator_verdict = str(
                validator_data.get(
                    "verdict",
                    ""
                )
            ).upper().strip()

            if validator_verdict not in (
                "PASS",
                "PARTIAL",
                "FAIL"
            ):
                return False

            # Exact agreement on the payout-driving decision.
            return (
                leader_verdict
                == validator_verdict
            )

        # =====================================================
        # CONSENSUS
        # =====================================================

        # No state is modified before consensus.
        #
        # If evidence retrieval fails or validators cannot
        # agree, the transaction reverts.
        #
        # The dispute remains SUBMITTED and can later be
        # recovered through recover_submitted().

        result = gl.vm.run_nondet_unsafe(
            leader_fn,
            validator_fn
        )

        if not isinstance(
            result,
            dict
        ):
            raise gl.vm.UserError(
                "Malformed consensus result"
            )

        verdict = str(
            result.get(
                "verdict",
                ""
            )
        ).upper().strip()

        explanation = str(
            result.get(
                "explanation",
                ""
            )
        ).strip()

        if verdict not in (
            "PASS",
            "PARTIAL",
            "FAIL"
        ):
            raise gl.vm.UserError(
                "Consensus returned an invalid verdict"
            )

        if not explanation:
            raise gl.vm.UserError(
                "Consensus returned no explanation"
            )

        score = self._score_for_verdict(
            verdict
        )

        # =====================================================
        # STORE CONSENSUS RESULT
        # =====================================================

        self.scores[
            dispute_id
        ] = score

        self.verdicts[
            dispute_id
        ] = verdict

        self.explanations[
            dispute_id
        ] = explanation

        self.resolved_at[
            dispute_id
        ] = self._now_iso()

        amount = self.amounts[
            dispute_id
        ]

        # =====================================================
        # PASS
        # =====================================================

        if verdict == "PASS":

            self.statuses[
                dispute_id
            ] = "PAID"

            self.provider_payouts[
                dispute_id
            ] = amount

            if amount > u256(0):

                _Recipient(
                    self.providers[
                        dispute_id
                    ]
                ).emit_transfer(
                    value=amount
                )

        # =====================================================
        # FAIL
        # =====================================================

        elif verdict == "FAIL":

            self.statuses[
                dispute_id
            ] = "REFUNDED"

            self.creator_refunds[
                dispute_id
            ] = amount

            if amount > u256(0):

                _Recipient(
                    self.creators[
                        dispute_id
                    ]
                ).emit_transfer(
                    value=amount
                )

        # =====================================================
        # PARTIAL
        # =====================================================

        else:

            self.statuses[
                dispute_id
            ] = "PARTIAL"

    # =========================================================
    # PARTIAL SETTLEMENT
    # =========================================================

    @gl.public.write
    def settle_partial(
        self,
        dispute_id: u32
    ) -> None:

        self._require_valid_id(
            dispute_id
        )

        if (
            self.statuses[
                dispute_id
            ]
            != "PARTIAL"
        ):
            raise gl.vm.UserError(
                "Dispute is not awaiting partial settlement"
            )

        if (
            self.verdicts[
                dispute_id
            ]
            != "PARTIAL"
            or
            self.scores[
                dispute_id
            ]
            != u32(50)
        ):
            raise gl.vm.UserError(
                "Invalid partial adjudication"
            )

        amount = self.amounts[
            dispute_id
        ]

        provider_amount = (
            amount // u256(2)
        )

        creator_amount = (
            amount - provider_amount
        )

        # =====================================================
        # SETTLEMENT STATE
        # =====================================================

        self.provider_payouts[
            dispute_id
        ] = provider_amount

        self.creator_refunds[
            dispute_id
        ] = creator_amount

        self.statuses[
            dispute_id
        ] = "PARTIAL_SETTLED"

        # =====================================================
        # PROVIDER PAYMENT
        # =====================================================

        if provider_amount > u256(0):

            _Recipient(
                self.providers[
                    dispute_id
                ]
            ).emit_transfer(
                value=provider_amount
            )

        # =====================================================
        # CREATOR REFUND
        # =====================================================

        if creator_amount > u256(0):

            _Recipient(
                self.creators[
                    dispute_id
                ]
            ).emit_transfer(
                value=creator_amount
            )

    # =========================================================
    # VIEWS
    # =========================================================

    @gl.public.view
    def get_dispute(
        self,
        dispute_id: u32
    ):

        self._require_valid_id(
            dispute_id
        )

        return {
            "id": dispute_id,

            "creator": str(
                self.creators[
                    dispute_id
                ]
            ),

            "provider": str(
                self.providers[
                    dispute_id
                ]
            ),

            "title": self.titles[
                dispute_id
            ],

            "requirements": self.requirements[
                dispute_id
            ],

            "submission_url": self.submission_urls[
                dispute_id
            ],

            "submission_commit": self.submission_commits[
                dispute_id
            ],

            "amount": self.amounts[
                dispute_id
            ],

            "status": self.statuses[
                dispute_id
            ],

            "deadline": self.deadlines[
                dispute_id
            ],

            "created_at": self.created_at[
                dispute_id
            ],

            "submitted_at": self.submitted_at[
                dispute_id
            ],

            "recovery_deadline": self.recovery_deadlines[
                dispute_id
            ],

            "resolved_at": self.resolved_at[
                dispute_id
            ],

            "score": self.scores[
                dispute_id
            ],

            "verdict": self.verdicts[
                dispute_id
            ],

            "explanation": self.explanations[
                dispute_id
            ],

            "provider_payout": self.provider_payouts[
                dispute_id
            ],

            "creator_refund": self.creator_refunds[
                dispute_id
            ]
        }

    @gl.public.view
    def get_dispute_count(
        self
    ) -> u32:

        return u32(
            len(self.titles)
        )

    @gl.public.view
    def get_status(
        self,
        dispute_id: u32
    ) -> str:

        self._require_valid_id(
            dispute_id
        )

        return self.statuses[
            dispute_id
        ]

    @gl.public.view
    def get_score(
        self,
        dispute_id: u32
    ) -> u32:

        self._require_valid_id(
            dispute_id
        )

        return self.scores[
            dispute_id
        ]

    @gl.public.view
    def get_verdict(
        self,
        dispute_id: u32
    ) -> str:

        self._require_valid_id(
            dispute_id
        )

        return self.verdicts[
            dispute_id
        ]

    @gl.public.view
    def get_explanation(
        self,
        dispute_id: u32
    ) -> str:

        self._require_valid_id(
            dispute_id
        )

        return self.explanations[
            dispute_id
        ]

    @gl.public.view
    def get_contract_balance(
        self
    ) -> u256:

        return self.balance
