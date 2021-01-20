import { FacetSearchResponse } from '../../../../api/search/facet-search/facet-search-response';
import { AsyncThunkSearchOptions } from '../../../../api/search/search-api-client';
import { StateNeededForFacetSearch } from './generic-facet-search-state';
/**
 * Executes a facet search (i.e., a search for facet values in a facet search box).
 * @param facetId (string) The unique identifier of the facet for which to perform a facet search (e.g., `"1"`).
 */
export declare const executeFacetSearch: import("@reduxjs/toolkit").AsyncThunk<{
    facetId: string;
    response: FacetSearchResponse;
}, string, AsyncThunkSearchOptions<StateNeededForFacetSearch>>;
