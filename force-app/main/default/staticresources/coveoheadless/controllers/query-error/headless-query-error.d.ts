import { Engine } from '../../app/headless-engine';
import { SearchSection } from '../../state/state-sections';
/**
 * `QueryError` controller allows to retrieve information about the current error returned by the search API, if any.
 */
export declare type QueryError = ReturnType<typeof buildQueryError>;
/**
 * A scoped and simplified part of the headless state that is relevant to the `QueryError` controller.
 */
export declare type QueryErrorState = QueryError['state'];
export declare const buildQueryError: (engine: Engine<SearchSection>) => {
    state: {
        /**
         * `true` if there is an error for the last executed query and `false` otherwise.
         */
        hasError: boolean;
        /**
         * The current error for the last executed query, or `null` if none is present.
         */
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
