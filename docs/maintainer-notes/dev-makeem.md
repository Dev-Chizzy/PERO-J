# Maintainer notes (Dev-makeem)

## #800 EventTable stable keys
Already implemented: `frontend/src/components/EventTable.tsx` wraps each event pair in `<React.Fragment key={ev.seq}>`.

## #801 GET /api/contracts
Already implemented: `indexer/src/api.js` defines `GET /api/contracts` (q/page/limit, default limit 25) via `db.getContracts`, with tests in `indexer/test/api.contracts.test.js`.
