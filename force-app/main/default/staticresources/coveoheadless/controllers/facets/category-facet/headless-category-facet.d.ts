import { Engine } from '../../../app/headless-engine';
import { CategoryFacetValue } from '../../../features/facets/category-facet-set/interfaces/response';
import { CategoryFacetSortCriterion } from '../../../features/facets/category-facet-set/interfaces/request';
import { CategoryFacetSearchSection, CategoryFacetSection, ConfigurationSection, SearchSection } from '../../../state/state-sections';
import { CategoryFacetOptions } from './headless-category-facet-options';
export { CategoryFacetOptions };
export declare type CategoryFacetProps = {
    /** The options for the `CategoryFacet` controller. */
    options: CategoryFacetOptions;
};
/**
 * The `CategoryFacet` headless controller offers a high-level interface for designing a facet UI controller that renders values in a hierarchical fashion.
 */
export declare type CategoryFacet = ReturnType<typeof buildCategoryFacet>;
/**
 * A scoped and simplified part of the headless state that is relevant to the `CategoryFacet` controller.
 */
export declare type CategoryFacetState = CategoryFacet['state'];
export declare function buildCategoryFacet(engine: Engine<CategoryFacetSection & SearchSection & ConfigurationSection & CategoryFacetSearchSection>, props: CategoryFacetProps): {
    facetSearch: {
        select(value: import("../../../api/search/facet-search/category-facet-search/category-facet-search-response").CategoryFacetSearchResult): void;
        updateText(text: string): void;
        showMoreResults(): void;
        search(): void;
    };
    /**
     * Toggles the specified facet value.
     * @param selection The facet value to toggle.
     */
    toggleSelect: (selection: CategoryFacetValue) => Promise<import("@reduxjs/toolkit").PayloadAction<void, string, {
        arg: {
            facetId: string;
            selection: CategoryFacetValue;
            retrieveCount: number;
        };
        requestId: string;
    }, never> | import("@reduxjs/toolkit").PayloadAction<import("../../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | undefined, string, {
        arg: {
            facetId: string;
            selection: CategoryFacetValue;
            retrieveCount: number;
        };
        requestId: string;
        aborted: boolean;
        condition: boolean;
    }, import("@reduxjs/toolkit").SerializedError>> & {
        abort(reason?: string | undefined): void;
    };
    /** Deselects all facet values.*/
    deselectAll: () => Promise<import("@reduxjs/toolkit").PayloadAction<void, string, {
        arg: {
            facetId: string;
        };
        requestId: string;
    }, never> | import("@reduxjs/toolkit").PayloadAction<import("../../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | undefined, string, {
        arg: {
            facetId: string;
        };
        requestId: string;
        aborted: boolean;
        condition: boolean;
    }, import("@reduxjs/toolkit").SerializedError>> & {
        abort(reason?: string | undefined): void;
    };
    /** Sorts the facet values according to the specified criterion.
     * @param criterion The criterion to sort values by.
     */
    sortBy(criterion: CategoryFacetSortCriterion): void;
    /**
     * Checks whether the facet values are sorted according to the specified criterion.
     * @param criterion The criterion to compare.
     * @returns Whether the facet values are sorted according to the specified criterion.
     */
    isSortedBy(criterion: CategoryFacetSortCriterion): boolean;
    /**
     * Increases the number of values displayed in the facet to the next multiple of the originally configured value.
     */
    showMoreValues(): void;
    /** Sets the displayed number of values to the originally configured value. */
    showLessValues(): void;
    state: {
        /** The facet id. */
        facetId: string;
        /** The parent values of the facet. */
        parents: CategoryFacetValue[];
        /** The values of the facet. */
        values: CategoryFacetValue[];
        /** `true` if a search is in progress and `false` otherwise. */
        isLoading: boolean;
        /** `true` if there is at least one non-idle value and `false` otherwise. */
        hasActiveValues: boolean;
        /** `true` if there are more values to display and `false` otherwise. */
        canShowMoreValues: boolean | undefined;
        /** `true` if fewer values can be displayed and `false` otherwise. */
        canShowLessValues: boolean;
        /** The active sortCriterion of the facet. */
        sortCriteria: "alphanumeric" | "occurrences";
        /** The state of the facet's searchbox. */
        facetSearch: {
            values: import("../../../api/search/facet-search/category-facet-search/category-facet-search-response").CategoryFacetSearchResult[];
            isLoading: boolean;
            moreValuesAvailable: boolean;
        } | {
            values: import("../../../api/search/facet-search/category-facet-search/category-facet-search-response").CategoryFacetSearchResult[];
            isLoading: boolean;
            moreValuesAvailable: boolean;
        };
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
