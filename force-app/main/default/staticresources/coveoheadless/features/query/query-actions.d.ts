import { QueryState } from './query-state';
/**
 * Updates the basic query expression.
 * @param q (string) The new basic query expression (e.g., `acme tornado seeds`).
 */
export declare const updateQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: Partial<QueryState>], Partial<QueryState>, "query/updateQuery", never, never>;
