import { FacetRegistrationOptions } from './interfaces/options';
import { FacetSortCriterion } from './interfaces/request';
import { FacetValue } from './interfaces/response';
/**
 * Registers a facet in the facet set.
 * @param (FacetRegistrationOptions) The options to register the facet with.
 */
export declare const registerFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: FacetRegistrationOptions], FacetRegistrationOptions, "facet/register", never, never>;
/**
 * Toggles a facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (FacetValue) The target facet value.
 */
export declare const toggleSelectFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    selection: FacetValue;
}], {
    facetId: string;
    selection: FacetValue;
}, "facet/toggleSelectValue", never, never>;
/**
 * Deselects all values of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const deselectAllFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
/**
 * Updates the sort criterion of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (FacetSortCriterion) The criterion by which to sort the facet.
 */
export declare const updateFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    criterion: FacetSortCriterion;
}], {
    facetId: string;
    criterion: FacetSortCriterion;
}, "facet/updateSortCriterion", never, never>;
/**
 * Updates the number of values of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param numberOfValues (number) The new number of facet values (e.g., `10`).
 */
export declare const updateFacetNumberOfValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    numberOfValues: number;
}], {
    facetId: string;
    numberOfValues: number;
}, "facet/updateNumberOfValues", never, never>;
/**
 * Whether to expand (show more values than initially configured) or shrink down the facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param isFieldExpanded (boolean) Whether to expand or shrink down the facet.
 */
export declare const updateFacetIsFieldExpanded: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    isFieldExpanded: boolean;
}], {
    facetId: string;
    isFieldExpanded: boolean;
}, "facet/updateIsFieldExpanded", never, never>;
/**
 * Updates the updateFreezeCurrentValues flag of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param freezeCurrentValues (boolean) Wether the values should be frozen in the next request.
 */
export declare const updateFreezeCurrentValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    freezeCurrentValues: boolean;
}], {
    facetId: string;
    freezeCurrentValues: boolean;
}, "facet/updateFreezeCurrentValues", never, never>;
