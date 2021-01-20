import { SearchRequest } from '../../api/search/search/search-request';
import { DateRangeRequest } from '../facets/range-facets/date-facet-set/interfaces/request';
import { NumericRangeRequest } from '../facets/range-facets/numeric-facet-set/interfaces/request';
declare type FacetParameters = {
    f: Record<string, string[]>;
    cf: Record<string, string[]>;
    nf: Record<string, NumericRangeRequest[]>;
    df: Record<string, DateRangeRequest[]>;
};
export declare type SearchParameters = Omit<SearchRequest, 'organizationId' | 'accessToken' | 'visitorId' | 'url' | 'enableDidYouMean' | 'fieldsToInclude' | 'facetOptions' | 'facets' | 'searchHub' | 'pipeline' | 'context'> & Partial<FacetParameters>;
/** Restores search parameters from e.g. a url*/
export declare const restoreSearchParameters: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SearchParameters], SearchParameters, "searchParameters/restore", never, never>;
export {};
