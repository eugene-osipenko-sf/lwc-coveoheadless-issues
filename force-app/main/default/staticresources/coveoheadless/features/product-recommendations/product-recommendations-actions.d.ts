import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { ConfigurationSection, SearchHubSection, ProductRecommendationsSection, ContextSection } from '../../state/state-sections';
import { ProductRecommendationsRequest } from '../../api/search/product-recommendations/product-recommendations-request';
import { ProductRecommendation } from '../../api/search/search/product';
import { SearchAction } from '../analytics/analytics-utils';
export declare type StateNeededByGetProductRecommendations = ConfigurationSection & ProductRecommendationsSection & Partial<ContextSection & SearchHubSection>;
export interface GetProductRecommendationsThunkReturn {
    recommendations: ProductRecommendation[];
    analyticsAction: SearchAction;
    searchUid: string;
    duration: number;
}
export declare const setProductRecommendationsRecommenderId: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
}], {
    id: string;
}, "productrecommendations/setId", never, never>;
export declare const setProductRecommendationsSkus: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    skus: string[];
}], {
    skus: string[];
}, "productrecommendations/setSku", never, never>;
export declare const setProductRecommendationsBrandFilter: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    brand: string;
}], {
    brand: string;
}, "productrecommendations/setBrand", never, never>;
export declare const setProductRecommendationsCategoryFilter: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    category: string;
}], {
    category: string;
}, "productrecommendations/setCategory", never, never>;
export declare const setProductRecommendationsMaxNumberOfRecommendations: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    number: number;
}], {
    number: number;
}, "productrecommendations/setMaxNumberOfRecommendations", never, never>;
export declare const getProductRecommendations: import("@reduxjs/toolkit").AsyncThunk<GetProductRecommendationsThunkReturn, void, AsyncThunkSearchOptions<StateNeededByGetProductRecommendations>>;
export declare const buildProductRecommendationsRequest: (s: StateNeededByGetProductRecommendations) => ProductRecommendationsRequest;
