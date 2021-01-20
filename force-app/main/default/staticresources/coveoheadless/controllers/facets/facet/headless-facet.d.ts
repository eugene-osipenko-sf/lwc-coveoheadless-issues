import { Engine } from '../../../app/headless-engine';
import { FacetValue } from '../../../features/facets/facet-set/interfaces/response';
import { FacetSortCriterion } from '../../../features/facets/facet-set/interfaces/request';
import { ConfigurationSection, FacetSearchSection, FacetSection, SearchSection } from '../../../state/state-sections';
import { FacetOptions } from './headless-facet-options';
export { FacetOptions };
export declare type FacetProps = {
    /** The options for the `Facet` controller. */
    options: FacetOptions;
};
/**
 * The `Facet` headless controller offers a high-level interface for designing a common facet UI controller.
 */
export declare type Facet = ReturnType<typeof buildFacet>;
/**
 * A scoped and simplified part of the headless state that is relevant to the `Facet` controller.
 */
export declare type FacetState = Facet['state'];
export declare function buildFacet(engine: Engine<FacetSection & ConfigurationSection & FacetSearchSection & SearchSection>, props: FacetProps): {
    facetSearch: {
        select(value: import("../../../api/search/facet-search/base/base-facet-search-response").BaseFacetSearchResult): void;
        updateText(text: string): void;
        showMoreResults(): void;
        search(): void;
    };
    /**
     * Toggles the specified facet value.
     * @param selection The facet value to toggle.
     */
    toggleSelect: (selection: FacetValue) => Promise<import("@reduxjs/toolkit").PayloadAction<void, string, {
        arg: {
            facetId: string;
            selection: FacetValue;
        };
        requestId: string;
    }, never> | import("@reduxjs/toolkit").PayloadAction<import("../../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | undefined, string, {
        arg: {
            facetId: string;
            selection: FacetValue;
        };
        requestId: string;
        aborted: boolean;
        condition: boolean;
    }, import("@reduxjs/toolkit").SerializedError>> & {
        abort(reason?: string | undefined): void;
    };
    /**
     * Checks whether the specified facet value is selected.
     * @param value The facet value to check.
     * @returns Whether the specified facet value is selected.
     */
    isValueSelected: (value: FacetValue) => boolean;
    /** Deselects all facet values.*/
    deselectAll(): void;
    /** Sorts the facet values according to the specified criterion.
     * @param criterion The criterion to sort values by.
     */
    sortBy(criterion: FacetSortCriterion): void;
    /**
     * Checks whether the facet values are sorted according to the specified criterion.
     * @param criterion The criterion to compare.
     * @returns Whether the facet values are sorted according to the specified criterion.
     */
    isSortedBy(criterion: FacetSortCriterion): boolean;
    /**
     * Increases the number of values displayed in the facet to the next multiple of the originally configured value.
     */
    showMoreValues(): void;
    /** Sets the displayed number of values to the originally configured value.*/
    showLessValues(): void;
    state: {
        /** The facet id. */
        facetId: string;
        /** The values of the facet. */
        values: FacetValue[];
        /** The active sortCriterion of the facet. */
        sortCriterion: "score" | "alphanumeric" | "occurrences" | "automatic";
        /** `true` if a search is in progress and `false` otherwise. */
        isLoading: boolean;
        /** `true` if there is at least one non-idle value and `false` otherwise. */
        hasActiveValues: boolean;
        /** `true` if there are more values to display and `false` otherwise. */
        canShowMoreValues: boolean;
        /** `true` if fewer values can be displayed and `false` otherwise. */
        canShowLessValues: boolean;
        /** The state of the facet's searchbox. */
        facetSearch: {
            values: import("../../../api/search/facet-search/base/base-facet-search-response").BaseFacetSearchResult[];
            isLoading: boolean;
            moreValuesAvailable: boolean;
        } | {
            values: import("../../../api/search/facet-search/base/base-facet-search-response").BaseFacetSearchResult[];
            isLoading: boolean;
            moreValuesAvailable: boolean;
        };
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
