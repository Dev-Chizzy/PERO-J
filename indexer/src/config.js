// Cache TTL for successfully resolved (registered) ABIs.
const ABI_CACHE_TTL_MS = 60_000;

// Short cache TTL for negative (not-registered) ABI lookups so that
// contracts registered during the window are re-discovered quickly.
const NOT_REGISTERED_TTL_MS = 2000;

module.exports = {
  ABI_CACHE_TTL_MS,
  NOT_REGISTERED_TTL_MS,
};
