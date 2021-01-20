import { Engine } from '../../../../app/headless-engine';
import { DateFacetValue } from '../../../../features/facets/range-facets/date-facet-set/interfaces/response';
import { ConfigurationSection, DateFacetSection, SearchSection } from '../../../../state/state-sections';
import { DateFacetOptions } from './headless-date-facet-options';
import { buildDateRange } from './date-range';
export { buildDateRange };
export { DateFacetOptions };
export declare type DateFacetProps = {
    /** The options for the `DateFacet` controller. */
    options: DateFacetOptions;
};
/** The `DateFacet` controller makes it possible to create a facet with date ranges. */
export declare type DateFacet = ReturnType<typeof buildDateFacet>;
/**
 * A scoped and simplified part of the headless state that is relevant to the `DateFacet` controller.
 */
export declare type DateFacetState = DateFacet['state'];
export declare function buildDateFacet(engine: Engine<ConfigurationSection & SearchSection & DateFacetSection>, props: DateFacetProps): {
    /**
     * Toggles the specified facet value.
     * @param selection The facet value to toggle.
     */
    toggleSelect: (selection: DateFacetValue) => Promise<import("@reduxjs/toolkit").PayloadAction<void, string, {
        arg: {
            facetId: string;
            selection: DateFacetValue;
        };
        requestId: string;
    }, never> | import("@reduxjs/toolkit").PayloadAction<import("../../../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | undefined, string, {
        arg: {
            facetId: string;
            selection: DateFacetValue;
        };
        requestId: string;
        aborted: boolean;
        condition: boolean;
    }, import("@reduxjs/toolkit").SerializedError>> & {
        abort(reason?: string | undefined): void;
    };
    state: {
        /** `true` if a search is in progress and `false` otherwise. */
        isLoading: boolean;
        facetId: string;
        values: DateFacetValue[];
        sortCriterion: "ascending" | "descending";
        hasActiveValues: boolean;
    };
    isValueSelected: (selection: import("../../../../features/facets/range-facets/generic/interfaces/range-facet").RangeFacetValue) => boolean;
    deselectAll(): void;
    sortBy(criterion: "ascending" | "descending"): void;
    isSortedBy(criterion: "ascending" | "descending"): boolean;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
