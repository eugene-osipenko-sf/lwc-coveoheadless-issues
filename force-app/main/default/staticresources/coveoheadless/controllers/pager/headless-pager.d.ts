import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, PaginationSection } from '../../state/state-sections';
export declare type PagerInitialState = {
    /** The initial page number */
    page?: number;
};
export declare type PagerOptions = {
    /** The number of pages to display in the pager. */
    numberOfPages?: number;
};
export interface PagerProps {
    /**
     * The options for the `Pager` controller.
     */
    options?: PagerOptions;
    /**
     * The initial state that should be applied to the `Pager` controller.
     */
    initialState?: PagerInitialState;
}
export declare type Pager = ReturnType<typeof buildPager>;
/**
 * A scoped and simplified part of the headless state that is relevant to the `Pager` controller.
 */
export declare type PagerState = Pager['state'];
/**
 * The `Pager` controller allows to navigate through the different result pages.
 */
export declare function buildPager(engine: Engine<PaginationSection & ConfigurationSection>, props?: PagerProps): {
    state: {
        /** @returns the current selected page */
        currentPage: number;
        /** @returns the current pages range */
        currentPages: number[];
        /**  @returns the max available page for this query */
        maxPage: number;
        /** @returns `true` when a previous page is available, and `false` otherwise.*/
        hasPreviousPage: boolean;
        /** @returns `true` when a next page is available, and `false` otherwise. */
        hasNextPage: boolean;
    };
    /**
     * Updates the results to those on the passed page.
     * @param page The page number.
     */
    selectPage(page: number): void;
    /**
     * Updates the results to those on the next page.
     */
    nextPage(): void;
    /**
     * Updates the results to those on the previous page.
     */
    previousPage(): void;
    /**
     * @returns `true` when the current page is equal to the current page, and `false` otherwise.
     * @param page The page number to check.
     * @returns boolean.
     */
    isCurrentPage(page: number): boolean;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
