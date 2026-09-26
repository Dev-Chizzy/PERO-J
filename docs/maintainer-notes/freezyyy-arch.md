## #796 Function filter dropdown

Already implemented in `frontend/src/pages/Home.tsx`: the `<select>` is populated from the `functions` query (`GET /api/functions`), `handleFunctionChange` filters the table, and the custom function input (`customFn` / `handleCustomFnChange`) coexists with it. No code change needed.

