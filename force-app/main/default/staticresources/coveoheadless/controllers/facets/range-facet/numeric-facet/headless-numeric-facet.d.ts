import { Engine } from '../../../../app/headless-engine';
import { NumericRangeRequest } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/request';
import { NumericFacetValue } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/response';
import { ConfigurationSection, NumericFacetSection, SearchSection } from '../../../../state/state-sections';
import { NumericFacetOptions } from './headless-numeric-facet-options';
declare type NumericRangeOptions = Pick<NumericRangeRequest, 'start' | 'end'> & Partial<NumericRangeRequest>;
/** Creates a `NumericRangeRequest`.
 * @param config The options with which to create a `NumericRangeRequest`.
 * @returns A new `NumericRangeRequest`.
 */
export declare function buildNumericRange(config: NumericRangeOptions): NumericRangeRequest;
export { NumericFacetOptions };
export declare type NumericFacetProps = {
    /** The options for the `NumericFacet` controller. */
    options: NumericFacetOptions;
};
/** The `NumericFacet` controller makes it possible to create a facet with numeric ranges. */
export declare type NumericFacet = ReturnType<typeof buildNumericFacet>;
/**
 * A scoped and simplified part of the headless state that is relevant to the `NumericFacet` controller.
 */
export declare type NumericFacetState = NumericFacet['state'];
export declare function buildNumericFacet(engine: Engine<NumericFacetSection & ConfigurationSection & SearchSection>, props: NumericFacetProps): {
    /**
     * Toggles the specified facet value.
     * @param selection The facet value to toggle.
     */
    toggleSelect: (selection: NumericFacetValue) => Promise<import("@reduxjs/toolkit").PayloadAction<void, string, {
        arg: {
            facetId: string;
            selection: NumericFacetValue;
        };
        requestId: string;
    }, never> | import("@reduxjs/toolkit").PayloadAction<import("../../../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | undefined, string, {
        arg: {
            facetId: string;
            selection: NumericFacetValue;
        };
        requestId: string;
        aborted: boolean;
        condition: boolean;
    }, import("@reduxjs/toolkit").SerializedError>> & {
        abort(reason?: string | undefined): void;
    };
    state: {
        facetId: string;
        values: NumericFacetValue[];
        sortCriterion: "ascending" | "descending";
        hasActiveValues: boolean;
        isLoading: boolean;
    };
    isValueSelected: (selection: import("../../../../features/facets/range-facets/generic/interfaces/range-facet").RangeFacetValue) => boolean;
    deselectAll(): void;
    sortBy(criterion: "ascending" | "descending"): void;
    isSortedBy(criterion: "ascending" | "descending"): boolean;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
