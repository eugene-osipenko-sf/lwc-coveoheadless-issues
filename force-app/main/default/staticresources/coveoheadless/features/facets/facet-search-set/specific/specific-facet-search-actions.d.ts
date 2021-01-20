import { SpecificFacetSearchResult } from '../../../../api/search/facet-search/specific-facet-search/specific-facet-search-response';
import { FacetSearchOptions } from '../facet-search-request-options';
declare type selectFacetSearchResultPayload = {
    facetId: string;
    value: SpecificFacetSearchResult;
};
/**
 * Registers a facet search box with the specified options.
 * @param (FacetSearchOptions) An object specifying the target facet and facet search box options.
 */
export declare const registerFacetSearch: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: FacetSearchOptions], FacetSearchOptions, "facetSearch/register", never, never>;
/**
 * Updates the options of a facet search box.
 * @param (FacetSearchOptions) An object specifying the target facet and facet search box options.
 */
export declare const updateFacetSearch: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: FacetSearchOptions], FacetSearchOptions, "facetSearch/update", never, never>;
/**
 * Selects a facet search result.
 * @param (selectFacetSearchResultPayload) An object that specifies the target facet and facet search result.
 */
export declare const selectFacetSearchResult: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: selectFacetSearchResultPayload], selectFacetSearchResultPayload, "facetSearch/toggleSelectValue", never, never>;
export {};
