import { FacetSearchOptions } from '../facet-search-request-options';
import { CategoryFacetSearchResult } from '../../../../api/search/facet-search/category-facet-search/category-facet-search-response';
/** Selects the corresponding category facet value for the provided
 * category facet search result */
export declare const selectCategoryFacetSearchResult: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    value: CategoryFacetSearchResult;
    retrieveCount: number;
}], {
    facetId: string;
    value: CategoryFacetSearchResult;
    retrieveCount: number;
}, "categoryFacet/selectSearchResult", never, never>;
/**
 * Registers a category facet search box with the specified options.
 * @param (FacetSearchOptions) An object specifying the target facet and facet search box options.
 */
export declare const registerCategoryFacetSearch: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: FacetSearchOptions], FacetSearchOptions, "categoryFacetSearch/register", never, never>;
