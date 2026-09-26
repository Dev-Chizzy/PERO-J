# Maintainer notes (rdj-savyy)

## #804 DELETE /api/contracts/:id
Already implemented: `app.delete("/api/contracts/:id")` in `indexer/src/api.js`, guarded by `requireAdminKey` (401 without a valid Bearer key), returns 204/404, backed by `db.deleteContractMeta` in `indexer/src/db.js`.

## #805 Error handler logging
Already implemented: exported `errorHandler` in `indexer/src/api.js` logs `console.error("API Error:", { method, path, stack })`; covered by the "errorHandler middleware" tests in `indexer/test/api.test.js`.
