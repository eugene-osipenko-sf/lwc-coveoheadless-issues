import { NumericFacetRegistrationOptions } from './interfaces/options';
import { NumericFacetValue } from './interfaces/response';
/**
 * Registers a numeric facet.
 * @param (NumericFacetRegistrationOptions) The options to register the facet with.
 */
export declare const registerNumericFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: NumericFacetRegistrationOptions], NumericFacetRegistrationOptions, "numericFacet/register", never, never>;
/**
 * Toggles a numeric facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (NumericFacetValue) The target numeric facet value.
 */
export declare const toggleSelectNumericFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    selection: NumericFacetValue;
}], {
    facetId: string;
    selection: NumericFacetValue;
}, "numericFacet/toggleSelectValue", never, never>;
/** Updates the sort criterion of a numeric facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (RangeFacetSortCriterion) The target criterion.
 */
export declare const updateNumericFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    criterion: "ascending" | "descending";
}], {
    facetId: string;
    criterion: "ascending" | "descending";
}, "rangeFacet/updateSortCriterion", never, never>;
/** Deselects all values of a numeric facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const deselectAllNumericFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
