import { DateFacetRegistrationOptions } from './interfaces/options';
import { DateFacetValue } from './interfaces/response';
/**
 * Registers a date facet.
 * @param (DateFacetRegistrationOptions) The options to register the facet with.
 */
export declare const registerDateFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: DateFacetRegistrationOptions], DateFacetRegistrationOptions, "dateFacet/register", never, never>;
/**
 * Toggles a date facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (DateFacetValue) The target date facet value.
 */
export declare const toggleSelectDateFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    selection: DateFacetValue;
}], {
    facetId: string;
    selection: DateFacetValue;
}, "dateFacet/toggleSelectValue", never, never>;
/** Updates the sort criterion of a date facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (RangeFacetSortCriterion) The target criterion.
 */
export declare const updateDateFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    criterion: "ascending" | "descending";
}], {
    facetId: string;
    criterion: "ascending" | "descending";
}, "rangeFacet/updateSortCriterion", never, never>;
/** Deselects all values of a date facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const deselectAllDateFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
