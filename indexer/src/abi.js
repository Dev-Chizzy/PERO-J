'use strict';

const { getContractAbi } = require('./contracts');

// TTL for successfully resolved (registered) ABIs.
const ABI_TTL_MS = 60 * 1000;

// Short TTL for negative (not-registered) lookups so that contracts
// registered during the cache window are re-discovered quickly.
const NOT_REGISTERED_TTL_MS = 2000;

// Cache entry shape: { abi: object|null, expiresAt: number }
const abiCache = new Map();

function getCachedAbi(address) {
  const key = String(address).toLowerCase();
  const entry = abiCache.get(key);
  if (!entry) {
    return undefined;
  }
  if (entry.expiresAt <= Date.now()) {
    abiCache.delete(key);
    return undefined;
  }
  return entry.abi;
}

function setCachedAbi(address, abi) {
  const key = String(address).toLowerCase();
  const ttl = abi ? ABI_TTL_MS : NOT_REGISTERED_TTL_MS;
  abiCache.set(key, { abi, expiresAt: Date.now() + ttl });
}

async function resolveAbi(address) {
  const cached = getCachedAbi(address);
  if (cached !== undefined) {
    return cached;
  }

  let abi = null;
  try {
    abi = await getContractAbi(address);
  } catch (err) {
    abi = null;
  }

  setCachedAbi(address, abi || null);
  return abi || null;
}

module.exports = {
  ABI_TTL_MS,
  NOT_REGISTERED_TTL_MS,
  getCachedAbi,
  setCachedAbi,
  resolveAbi,
};
