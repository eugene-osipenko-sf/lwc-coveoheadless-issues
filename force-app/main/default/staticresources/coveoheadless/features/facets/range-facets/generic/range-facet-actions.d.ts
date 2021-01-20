import { RangeFacetSortCriterion } from './interfaces/request';
/**
 * Updates the sort criterion of a range facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (RangeFacetSortCriterion) The target criterion.
 */
export declare const updateRangeFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    criterion: RangeFacetSortCriterion;
}], {
    facetId: string;
    criterion: RangeFacetSortCriterion;
}, "rangeFacet/updateSortCriterion", never, never>;
