# AgentDispute — Steward Hardening Revision

This revision addresses the steward acceptance request for the AgentDispute escrow adjudication.

## Steward request → implementation

| Steward requirement | Hardened implementation |
|---|---|
| Immutable evidence | `submit_dispute()` accepts only GitHub commit URLs or raw GitHub URLs pinned to a 40-character commit SHA. The exact URL and SHA are stored on-chain. Evaluation fetches only that stored immutable reference. |
| No score tolerance | The LLM returns only `PASS`, `PARTIAL`, or `FAIL`. The validator must match the leader verdict exactly. There is no ±15 score tolerance. |
| Deterministic payout tiers | `PASS = 100% provider`, `PARTIAL = 50% provider / 50% creator`, `FAIL = 0% provider`. The displayed score is derived as `100/50/0`; it is never used as a free-form payout percentage. |
| Recovery from repeated failure | Failed evaluation transactions leave the dispute `SUBMITTED`. After the deterministic 24-hour recovery window, anyone may call `recover_submitted()` to refund the creator. Evaluation is also disabled after that window. |
| Fail closed evidence | Evidence must return HTTP 200, non-empty body, valid UTF-8, and no more than 12,000 bytes. No truncation is performed. |
| Behavioral tests | `tests/test_agentdispute.py` covers immutable evidence, PASS/FAIL/PARTIAL settlement, failed/empty/malformed/oversized evidence, validator disagreement, recovery, authorization, and double settlement. |
| Real transaction lifecycle | Frontend polls the GenLayer transaction after `writeContract()` and distinguishes Pending, Accepted, Finalized, Failed, Rejected, and Timeout. A client timeout preserves the transaction hash instead of blindly retrying. |

## Contract

### Important

The previously deployed contract:

```text
0xd21c82603a64Bd42ff37FB04cD004699c6A4BbeA
```

is the **pre-hardening** version. Deploy `contracts/AgentDispute.py` as a replacement and use its new address in the frontend.

### Deploy to Studionet

```bash
genlayer deploy --contract contracts/AgentDispute.py --rpc https://studio.genlayer.com/api
```

Record the new contract address.

## Tests

Install:

```bash
pip install -r requirements.txt
```

Run the behavioral suite:

```bash
pytest tests/ -v
```

Run against Studionet when network integration is available:

```bash
gltest tests/ -v --network studionet
```

GenLayer recommends Direct Mode for fast mocked behavioral coverage and Studio Mode for full multi-validator/network verification. citeturn8search0turn8search1

## Frontend

Set the new address in `frontend/.env.local`:

```env
NEXT_PUBLIC_CONTRACT_ADDRESS=<NEW_HARDENED_CONTRACT_ADDRESS>
```

Then:

```bash
cd frontend
npm install
npm run build
npm run dev
```

The frontend uses GenLayer Studionet (chain ID `61999`) and tracks the actual GenLayer transaction lifecycle. GenLayer documents `Accepted` as provisional and `Finalized` as the point at which a decision is no longer appealable. citeturn2search1turn2search6
