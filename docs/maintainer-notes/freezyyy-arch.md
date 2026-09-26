## #796 Function filter dropdown

Already implemented in `frontend/src/pages/Home.tsx`: the `<select>` is populated from the `functions` query (`GET /api/functions`), `handleFunctionChange` filters the table, and the custom function input (`customFn` / `handleCustomFnChange`) coexists with it. No code change needed.

## #797 Event count and filter summary

Already implemented in `frontend/src/pages/Home.tsx`: "Showing N of M events" is rendered above the table with " (filtered by function: X)" appended when `effectiveFn` is set, and hidden when `total === 0`. No code change needed.

