import { QuerySuggestSuccessResponse } from '../../api/search/query-suggest/query-suggest-response';
import { SearchAPIErrorWithStatusCode } from '../../api/search/search-api-error-response';
import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { ConfigurationSection, ContextSection, PipelineSection, QuerySuggestionSection, SearchHubSection } from '../../state/state-sections';
import { QuerySuggestRequest } from '../../api/search/query-suggest/query-suggest-request';
export declare type StateNeededByQuerySuggest = ConfigurationSection & QuerySuggestionSection & Partial<ContextSection & PipelineSection & SearchHubSection>;
export interface QuerySuggestionID {
    id: string;
}
/**
 * Registers a new query suggest entity to the headless state to enable the Coveo ML query suggestions feature.
 * @param id (string) A unique identifier for the new query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 * @param q (string) The partial basic query expression for which to request query suggestions (e.g., `cov`).
 * @param count (number) The number of query suggestions to request from Coveo ML (e.g., `3`). Default: `5`.
 */
export declare const registerQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
    q?: string | undefined;
    count?: number | undefined;
}], {
    id: string;
    q?: string | undefined;
    count?: number | undefined;
}, "querySuggest/register", never, never>;
/**
 * Unregisters an existing query suggest entity from the headless state.
 * @param id (string) The unique identifier of the query suggest entity to unregister (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
export declare const unregisterQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
}], {
    id: string;
}, "querySuggest/unregister", never, never>;
/**
 * Selects a suggestion provided through a specific query suggest entity.
 * @param id (string) The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 * @param expression (string) The selected query suggestion (e.g., `coveo`).
 */
export declare const selectQuerySuggestion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
    expression: string;
}], {
    id: string;
    expression: string;
}, "querySuggest/selectSuggestion", never, never>;
/**
 * Clears the current partial basic query expression and the list of query suggestions in a specific query suggest entity.
 * @param id (string) The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
export declare const clearQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
}], {
    id: string;
}, "querySuggest/clear", never, never>;
/**
 * Clears the list of query suggestions in a specific query suggest entity.
 * @param id (string) The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
export declare const clearQuerySuggestCompletions: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
}], {
    id: string;
}, "querySuggest/clearSuggestions", never, never>;
/**
 * Fetches a list of query suggestions for a specific query suggest entity according to the current headless state.
 * @param id (string) The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
export declare const fetchQuerySuggestions: import("@reduxjs/toolkit").AsyncThunk<QuerySuggestionID & QuerySuggestSuccessResponse, QuerySuggestionID, AsyncThunkSearchOptions<StateNeededByQuerySuggest> & {
    rejectValue: SearchAPIErrorWithStatusCode & QuerySuggestionID;
}>;
export declare const buildQuerySuggestRequest: (id: string, s: StateNeededByQuerySuggest) => QuerySuggestRequest;
