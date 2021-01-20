import { Engine } from '../../app/headless-engine';
import { SortCriterion } from '../../features/sort-criteria/criteria';
import { ConfigurationSection, SortSection } from '../../state/state-sections';
export interface SortProps {
    /**
     * The initial state that should be applied to this `Sort` controller.
     */
    initialState: Partial<SortInitialState>;
}
export interface SortInitialState {
    /** The initial sort criterion to register in state. */
    criterion: SortCriterion | SortCriterion[];
}
/** The `Sort` controller manages how the results are sorted. */
export declare type Sort = ReturnType<typeof buildSort>;
/** A scoped and simplified part of the headless state that is relevant to the `Sort` controller. */
export declare type SortState = Sort['state'];
export declare function buildSort(engine: Engine<ConfigurationSection & SortSection>, props?: Partial<SortProps>): {
    /**
     * Updates the sort criterion and executes a new search.
     * @param criterion The new sort criterion.
     */
    sortBy(criterion: SortCriterion | SortCriterion[]): void;
    /**
     * Checks whether the specified sort criterion matches the value in state.
     * @param criterion The criterion to compare.
     * @returns `true` if the passed sort criterion matches the value in state, and `false` otherwise.
     */
    isSortedBy(criterion: SortCriterion | SortCriterion[]): boolean;
    state: {
        /**
         * The sort criteria associated with this `Sort` controller.
         */
        sortCriteria: string;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe; /** The initial sort criterion to register in state. */
};
