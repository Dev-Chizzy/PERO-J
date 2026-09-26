# Maintainer notes (rdj-savyy)

## #804 DELETE /api/contracts/:id
Already implemented: `app.delete("/api/contracts/:id")` in `indexer/src/api.js`, guarded by `requireAdminKey` (401 without a valid Bearer key), returns 204/404, backed by `db.deleteContractMeta` in `indexer/src/db.js`.
