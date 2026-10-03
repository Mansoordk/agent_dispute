# AgentDispute — hardened StudioNet frontend

Frontend for the hardened AgentDispute GenLayer intelligent contract.

## Hardened contract changes

1. **Immutable evidence binding** — submissions must use a GitHub commit URL or raw GitHub URL pinned to a 40-character commit SHA. The exact reference and SHA are stored on-chain and evaluation always fetches that stored immutable reference.
2. **Deterministic payout tiers** — validators must agree exactly on `PASS`, `PARTIAL`, or `FAIL`. Payouts are fixed at 100%, 50/50, or 0%; there is no score tolerance.
3. **Deterministic recovery** — evaluation failures leave the dispute in `SUBMITTED`; after the fixed 24-hour recovery window anyone can call `recover_submitted()` to refund the creator.
4. **Fail-closed evidence retrieval** — non-200, empty, invalid UTF-8, and >12,000-byte responses are rejected before adjudication.
5. **Behavioral tests** — the repository includes Direct Mode tests for payout tiers, immutable evidence, failed retrieval, validator disagreement, recovery, authorization, and double settlement.

## Frontend transaction lifecycle

The UI tracks the real GenLayer transaction after wallet submission and distinguishes:

- `Pending`
- `Accepted — waiting for finalization`
- `Finalized — execution succeeded`
- `Failed`
- `Rejected` (wallet rejection before a transaction hash exists)
- `Timeout` (client-side tracking timeout; the transaction hash is preserved)

A timeout is never treated as a failed submission. The existing transaction hash is shown so it can be tracked instead of blindly submitting a duplicate write.

## Network

- GenLayer Studionet
- Chain ID: `61999`
- RPC: `https://studio.genlayer.com/api`

Set the new hardened contract address in `.env.local`:

```env
NEXT_PUBLIC_CONTRACT_ADDRESS=<NEW_HARDENED_CONTRACT_ADDRESS>
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Contract tests

From the project root:

```bash
pip install -r requirements.txt
pytest tests/ -v
```

For the hosted Studionet integration suite:

```bash
gltest tests/ -v --network studionet
```

## Important deployment note

The previously deployed contract `0xd21c82603a64Bd42ff37FB04cD004699c6A4BbeA` cannot be changed in place. Deploy `contracts/AgentDispute.py` as the hardened replacement, then put the new address into `.env.local` / Vercel.
