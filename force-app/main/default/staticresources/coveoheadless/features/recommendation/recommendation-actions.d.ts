import { RecommendationRequest } from '../../api/search/recommendation/recommendation-request';
import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { Result } from '../../api/search/search/result';
import { AdvancedSearchQueriesSection, ConfigurationSection, ContextSection, DebugSection, FieldsSection, PipelineSection, RecommendationSection, SearchHubSection } from '../../state/state-sections';
import { SearchAction } from '../analytics/analytics-utils';
export declare type StateNeededByGetRecommendations = ConfigurationSection & RecommendationSection & Partial<SearchHubSection & PipelineSection & AdvancedSearchQueriesSection & DebugSection & ContextSection & FieldsSection>;
export interface GetRecommendationsThunkReturn {
    recommendations: Result[];
    analyticsAction: SearchAction;
    duration: number;
}
/**
 * Set recommendation identifier.
 */
export declare const setRecommendationId: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
}], {
    id: string;
}, "recommendation/set", never, never>;
/**
 * Get recommendations.
 */
export declare const getRecommendations: import("@reduxjs/toolkit").AsyncThunk<GetRecommendationsThunkReturn, void, AsyncThunkSearchOptions<StateNeededByGetRecommendations>>;
export declare const buildRecommendationRequest: (s: StateNeededByGetRecommendations) => RecommendationRequest;
