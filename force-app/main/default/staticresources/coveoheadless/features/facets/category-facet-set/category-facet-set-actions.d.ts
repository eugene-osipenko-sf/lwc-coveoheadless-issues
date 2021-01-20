import { CategoryFacetRegistrationOptions } from './interfaces/options';
import { CategoryFacetValue } from './interfaces/response';
import { CategoryFacetSortCriterion } from './interfaces/request';
/**
 * Registers a category facet in the category facet set.
 * @param (CategoryFacetRegistrationOptions) The options to register the category facet with.
 */
export declare const registerCategoryFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: CategoryFacetRegistrationOptions], CategoryFacetRegistrationOptions, "categoryFacet/register", never, never>;
/**
 * Toggles a category facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (CategoryFacetValue) The target category facet value.
 */
export declare const toggleSelectCategoryFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    selection: CategoryFacetValue;
    retrieveCount: number;
}], {
    facetId: string;
    selection: CategoryFacetValue;
    retrieveCount: number;
}, "categoryFacet/toggleSelectValue", import("@reduxjs/toolkit").SerializedError | null, never>;
/** Deselects all values of a category facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const deselectAllCategoryFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
/** Updates the number of values of a category facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param numberOfValues (number) The new number of facet values (e.g., `10`).
 */
export declare const updateCategoryFacetNumberOfValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    numberOfValues: number;
}], {
    facetId: string;
    numberOfValues: number;
}, "facet/updateNumberOfValues", never, never>;
/**
 * Updates the the sort criterion for the category facet
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (FacetSortCriterion) The criterion by which to sort the facet.
 */
export declare const updateCategoryFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    criterion: CategoryFacetSortCriterion;
}], {
    facetId: string;
    criterion: CategoryFacetSortCriterion;
}, "categoryFacet/updateSortCriterion", never, never>;
