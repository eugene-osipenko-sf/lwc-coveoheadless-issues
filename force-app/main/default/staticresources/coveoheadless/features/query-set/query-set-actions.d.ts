/**
 * Registers a query in the query set.
 * @param id (string) The unique identifier of the target query.
 * @param query (string) The initial basic query expression.
 */
export declare const registerQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
    query: string;
}], {
    id: string;
    query: string;
}, "querySet/register", never, never>;
/**
 * Updates a query in the query set.
 * @param id (string) The unique identifier of the target query.
 * @param query (string) The new basic query expression.
 */
export declare const updateQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
    query: string;
}], {
    id: string;
    query: string;
}, "querySet/update", never, never>;
