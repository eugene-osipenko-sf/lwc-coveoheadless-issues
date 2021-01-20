/**
 * Update the values of the advanced search queries.
 * @param (advancedSearchQueries)  The current state of the advanced search queries.
 */
export declare const updateAdvancedSearchQueries: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    aq?: string | undefined;
    cq?: string | undefined;
}], {
    aq?: string | undefined;
    cq?: string | undefined;
}, "advancedSearchQueries/update", never, never>;
