import { Engine } from '../../app/headless-engine';
import { PaginationSection, SearchSection } from '../../state/state-sections';
export declare type QuerySummary = ReturnType<typeof buildQuerySummary>;
/** The state relevant to the `QuerySummary` controller.*/
export declare type QuerySummaryState = QuerySummary['state'];
/**
 * The QuerySummary component can display information about the current range of results (e.g., "Results
 * 1-10 of 123").
 *
 * When the query does not match any items, the QuerySummary component can instead return information to the end users.
 */
export declare const buildQuerySummary: (engine: Engine<SearchSection & PaginationSection>) => {
    state: {
        /**
         * The 1-based index of the first search result returned for the current page.
         */
        firstResult: number;
        /**
         * The 1-based index of the last search result returned for the current page.
         */
        lastResult: number;
        /**
         * The total count of results available.
         */
        total: number;
        /**
         * The query that was last executed (the content of the searchbox).
         */
        query: string;
        /**
         * Determines if an empty query was executed.
         */
        hasQuery: boolean;
        /**
         * Determines if a query execution time is available.
         */
        hasDuration: boolean;
        /**
         * Determines if there are results available for the last executed query.
         */
        hasResults: boolean;
        /**
         * The duration, in milliseconds, that the last query took to execute.
         */
        durationInMilliseconds: number;
        /**
         * The duration, in seconds, that the last query took to execute.
         */
        durationInSeconds: number;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
