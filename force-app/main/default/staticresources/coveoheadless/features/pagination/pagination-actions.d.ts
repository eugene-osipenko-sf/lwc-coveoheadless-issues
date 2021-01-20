/**
 * Initializes the `numberOfResults` query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-numberOfResults).
 * @param payload (number) The initial number of results.
 */
export declare const registerNumberOfResults: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: number], number, "pagination/registerNumberOfResults", never, never>;
/**
 * Updates the `numberOfResults` query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-numberOfResults).
 * @param payload (number) The new number of results.
 */
export declare const updateNumberOfResults: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: number], number, "pagination/updateNumberOfResults", never, never>;
/**
 * Sets the initial page by initializing the `firstResult` query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-firstResult).
 * @param payload (number) The initial page number.
 */
export declare const registerPage: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: number], number, "pagination/registerPage", never, never>;
/**
 * Updates the page by updating the `firstResult` query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-firstResult).
 * @param payload (number) The new page number.
 */
export declare const updatePage: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: number], number, "pagination/updatePage", never, never>;
/**
 * Updates the page to the next page.
 */
export declare const nextPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"pagination/nextPage">;
/**
 * Updates the page to the previous page.
 */
export declare const previousPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"pagination/previousPage">;
