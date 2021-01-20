import { PreprocessRequestMiddleware } from '../platform-client';
import { PlanResponseSuccess, Plan } from './plan/plan-response';
import { QuerySuggestSuccessResponse, QuerySuggest } from './query-suggest/query-suggest-response';
import { SearchRequest } from './search/search-request';
import { Search, SearchResponseSuccess } from './search/search-response';
import { SearchAPIErrorWithStatusCode } from './search-api-error-response';
import { PlanRequest } from './plan/plan-request';
import { QuerySuggestRequest } from './query-suggest/query-suggest-request';
import { FacetSearchRequest } from './facet-search/facet-search-request';
import { FacetSearchResponse } from './facet-search/facet-search-response';
import { SearchAppState } from '../../state/search-app-state';
import { CategoryFacetSearchRequest } from './facet-search/category-facet-search/category-facet-search-request';
import { RecommendationRequest } from './recommendation/recommendation-request';
import { ProductRecommendationsRequest } from './product-recommendations/product-recommendations-request';
import { Logger } from 'pino';
import { ThunkExtraArguments } from '../../app/store';
import { PostprocessFacetSearchResponseMiddleware, PostprocessQuerySuggestResponseMiddleware, PostprocessSearchResponseMiddleware } from './search-api-client-middleware';
export declare type AllSearchAPIResponse = Plan | Search | QuerySuggest;
export interface AsyncThunkSearchOptions<T extends Partial<SearchAppState>> {
    state: T;
    rejectValue: SearchAPIErrorWithStatusCode;
    extra: ThunkExtraArguments;
}
export interface SearchAPIClientOptions {
    renewAccessToken: () => Promise<string>;
    logger: Logger;
    preprocessRequest: PreprocessRequestMiddleware;
    postprocessSearchResponseMiddleware: PostprocessSearchResponseMiddleware;
    postprocessQuerySuggestResponseMiddleware: PostprocessQuerySuggestResponseMiddleware;
    postprocessFacetSearchResponseMiddleware: PostprocessFacetSearchResponseMiddleware;
}
export declare type SearchAPIClientResponse<T> = {
    success: T;
} | {
    error: SearchAPIErrorWithStatusCode;
};
export declare class SearchAPIClient {
    private options;
    constructor(options: SearchAPIClientOptions);
    plan(req: PlanRequest): Promise<SearchAPIClientResponse<PlanResponseSuccess>>;
    querySuggest(req: QuerySuggestRequest): Promise<SearchAPIClientResponse<QuerySuggestSuccessResponse>>;
    private searchAbortController;
    search(req: SearchRequest): Promise<SearchAPIClientResponse<SearchResponseSuccess>>;
    facetSearch(req: FacetSearchRequest | CategoryFacetSearchRequest): Promise<FacetSearchResponse>;
    recommendations(req: RecommendationRequest): Promise<{
        success: SearchResponseSuccess;
        error?: undefined;
    } | {
        error: {
            message: string;
            statusCode: number;
            type: string;
        };
        success?: undefined;
    }>;
    productRecommendations(req: ProductRecommendationsRequest): Promise<{
        success: SearchResponseSuccess;
        error?: undefined;
    } | {
        error: {
            message: string;
            statusCode: number;
            type: string;
        };
        success?: undefined;
    }>;
}
export declare const isSuccessResponse: <T>(r: SearchAPIClientResponse<T>) => r is {
    success: T;
};
export declare const isErrorResponse: <T>(r: SearchAPIClientResponse<T>) => r is {
    error: SearchAPIErrorWithStatusCode;
};
