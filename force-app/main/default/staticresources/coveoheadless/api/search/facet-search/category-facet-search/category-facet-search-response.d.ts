import { BaseFacetSearchResult, BaseFacetSearchResponse } from '../base/base-facet-search-response';
export interface CategoryFacetSearchResult extends BaseFacetSearchResult {
    /**
     * The hierarchical path to the value.
     */
    path: string[];
}
export declare type CategoryFacetSearchResponse = BaseFacetSearchResponse<CategoryFacetSearchResult>;
