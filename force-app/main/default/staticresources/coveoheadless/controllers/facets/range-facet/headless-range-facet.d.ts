import { Engine } from '../../../app/headless-engine';
import { RangeFacetResponse, RangeFacetRequest } from '../../../features/facets/range-facets/generic/interfaces/range-facet';
import { RangeFacetSortCriterion } from '../../../features/facets/range-facets/generic/interfaces/request';
import { ConfigurationSection, SearchSection } from '../../../state/state-sections';
export declare type RangeFacet = ReturnType<typeof buildRangeFacet>;
export declare type RangeFacetProps<T extends RangeFacetRequest> = {
    facetId: string;
    getRequest: () => T;
};
export declare function buildRangeFacet<T extends RangeFacetRequest, R extends RangeFacetResponse>(engine: Engine<ConfigurationSection & SearchSection>, props: RangeFacetProps<T>): {
    /**
     * Toggles the specified facet value.
     * @param selection The facet value to toggle.
     */
    toggleSelect: (selection: R["values"][0]) => Promise<import("@reduxjs/toolkit").PayloadAction<void, string, {
        arg: import("../../../features/facets/range-facets/generic/range-facet-validate-payload").RangeFacetSelectionPayload;
        requestId: string;
    }, never> | import("@reduxjs/toolkit").PayloadAction<import("../../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | undefined, string, {
        arg: import("../../../features/facets/range-facets/generic/range-facet-validate-payload").RangeFacetSelectionPayload;
        requestId: string;
        aborted: boolean;
        condition: boolean;
    }, import("@reduxjs/toolkit").SerializedError>> & {
        abort(reason?: string | undefined): void;
    };
    /**
     * Checks whether the specified facet value is selected.
     * @param selection The facet value to check.
     * @returns Whether the specified facet value is selected.
     */
    isValueSelected: (selection: import("../../../features/facets/range-facets/generic/interfaces/range-facet").RangeFacetValue) => boolean;
    /** Deselects all facet values. */
    deselectAll(): void;
    /** Sorts the facet values according to the specified criterion.
     * @param criterion The criterion to sort values by.
     */
    sortBy(criterion: RangeFacetSortCriterion): void;
    /**
     * Checks whether the facet values are sorted according to the specified criterion.
     * @param criterion The criterion to compare.
     * @returns Whether the facet values are sorted according to the specified criterion.
     */
    isSortedBy(criterion: RangeFacetSortCriterion): boolean;
    state: {
        /** The facet id. */
        facetId: string;
        /** The values of the facet. */
        values: R["values"];
        /** The active sortCriterion of the facet. */
        sortCriterion: "ascending" | "descending";
        /** `true` if there is at least one non-idle value and `false` otherwise. */
        hasActiveValues: boolean;
        /** `true` if a search is in progress and `false` otherwise. */
        isLoading: boolean;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
