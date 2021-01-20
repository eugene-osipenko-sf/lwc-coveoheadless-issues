import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, PaginationSection } from '../../state/state-sections';
export interface ResultsPerPageProps {
    /**
     * The initial state that should be applied to this `ResultsPerPage` controller.
     */
    initialState: Partial<ResultsPerPageInitialState>;
}
export interface ResultsPerPageInitialState {
    /**
     * The initial number of results to register in state.
     */
    numberOfResults: number;
}
/**
 * The `ResultsPerPage` controller allows the end user to choose how many results to display per page.
 */
export declare type ResultsPerPage = ReturnType<typeof buildResultsPerPage>;
/** A scoped and simplified part of the headless state that is relevant to the `ResultsPerPage` controller. */
export declare type ResultsPerPageState = ResultsPerPage['state'];
export declare function buildResultsPerPage(engine: Engine<PaginationSection & ConfigurationSection>, props?: Partial<ResultsPerPageProps>): {
    state: {
        /** The number of results per page. */
        numberOfResults: number;
    };
    /** Updates the number of results to request per page.
     * @param num The number of results.
     */
    set(num: number): void;
    /** Checks whether the number of results per page is equal to the specified number.
     * @param num The number of results.
     * @returns `true` if the number of results is equal to the passed value, and `false` otherwise.
     */
    isSetTo(num: number): boolean;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
