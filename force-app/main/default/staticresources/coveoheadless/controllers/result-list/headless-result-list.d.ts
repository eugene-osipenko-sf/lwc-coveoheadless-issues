import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, SearchSection } from '../../state/state-sections';
declare type ResultListOptions = {
    /**
     * A list of indexed fields to include in the objects returned by the result list.
     * These results are included in addition to the default fields.
     * If this is left empty only the default fields are included.
     */
    fieldsToInclude?: string[];
};
declare type ResultListProps = {
    /** The options for the `ResultList` controller. */
    options?: ResultListOptions;
};
/** A scoped and simplified part of the headless state that is relevant to the `ResultList` controller.*/
export declare type ResultListState = ResultList['state'];
/**
 * The `ResultList` headless controller offers a high-level interface for designing a common result list UI controller.
 */
export declare type ResultList = ReturnType<typeof buildResultList>;
export declare function buildResultList(engine: Engine<SearchSection & ConfigurationSection>, props?: ResultListProps): {
    state: {
        /** The results of the last executed search. */
        results: import("../..").Result[];
        /** `true` if a search is in progress and `false` otherwise. */
        isLoading: boolean;
    };
    /**
     * Using the same parameters as the last successful query, fetch another batch of results. Particularly useful for infinite scrolling, for example.
     */
    fetchMoreResults: () => void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
