# Steward resubmission checklist

1. Deploy `contracts/AgentDispute.py` to Studionet.
2. Record the **new** contract address.
3. Put the new address in `frontend/.env.local`.
4. Run `npm install`, `npm run build`, and `npm run dev` in `frontend/`.
5. Run `pytest tests/ -v`.
6. Run the integration tests against Studionet where available.
7. Test at least one real PASS, one FAIL, and one PARTIAL case.
8. Test an invalid branch URL and confirm the contract rejects it.
9. Test a non-200/empty/oversized evidence response in the behavioral suite.
10. Test validator disagreement and confirm the payout-driving tier cannot be accepted unless the validator agrees exactly.
11. Test recovery after the 24-hour evaluation window.
12. Test the frontend with a real transaction and verify it moves through Pending → Accepted → Finalized rather than treating the wallet submission as completion.
13. Update the deployed frontend/Vercel environment variable with the new contract address.
14. Submit the new contract address, frontend URL, GitHub commit, and test results to the steward.
