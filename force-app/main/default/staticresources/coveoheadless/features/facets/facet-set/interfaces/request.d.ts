import { BaseFacetRequest, CurrentValues, Freezable, Delimitable, Type, SortCriteria, BaseFacetValueRequest, Expandable } from '../../facet-api/request';
export declare const facetSortCriteria: readonly ["score", "alphanumeric", "occurrences", "automatic"];
export declare type FacetSortCriterion = typeof facetSortCriteria[number];
export interface FacetValueRequest extends BaseFacetValueRequest {
    value: string;
}
export interface FacetRequest extends BaseFacetRequest, CurrentValues<FacetValueRequest>, Expandable, Freezable, Delimitable, Type<'specific'>, SortCriteria<FacetSortCriterion> {
    /** @default "automatic" */
    sortCriteria: FacetSortCriterion;
}
