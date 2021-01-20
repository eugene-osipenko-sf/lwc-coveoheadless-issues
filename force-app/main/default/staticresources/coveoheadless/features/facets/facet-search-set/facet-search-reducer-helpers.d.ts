import { FacetSearchOptions } from './facet-search-request-options';
import { FacetSearchResponse } from '../../../api/search/facet-search/facet-search-response';
import { FacetSearchRequestOptions } from '../../../api/search/facet-search/base/base-facet-search-request';
export declare type FacetSearchState<T extends FacetSearchResponse> = {
    /**
     * The options used to perform a facet search request.
     */
    options: FacetSearchRequestOptions;
    /**
     * `true` if the facet search request is currently being executed against the Coveo platform, `false` otherwise.
     */
    isLoading: boolean;
    /**
     * The facet search response.
     */
    response: T;
};
export declare type FacetSearchSetState<T extends FacetSearchResponse> = Record<string, FacetSearchState<T>>;
export declare function handleFacetSearchRegistration<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, payload: FacetSearchOptions, buildEmptyResponse: () => T): void;
export declare function handleFacetSearchUpdate<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, payload: FacetSearchOptions): void;
export declare function handleFacetSearchPending<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, facetId: string): void;
export declare function handleFacetSearchRejected<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, facetId: string): void;
export declare function handleFacetSearchFulfilled<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, payload: {
    facetId: string;
    response: T;
}): void;
export declare const defaultFacetSearchOptions: FacetSearchRequestOptions;
