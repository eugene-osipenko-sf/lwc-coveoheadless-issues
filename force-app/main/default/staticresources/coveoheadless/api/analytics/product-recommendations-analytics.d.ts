import { SearchPageClientProvider } from 'coveo.analytics';
import { ConfigurationSection, ProductRecommendationsSection, SearchHubSection } from '../../state/state-sections';
export declare type StateNeededByProductRecommendationsAnalyticsProvider = ConfigurationSection & Partial<SearchHubSection & ProductRecommendationsSection>;
export declare class ProductRecommendationAnalyticsProvider implements SearchPageClientProvider {
    private state;
    private initialState;
    constructor(state: StateNeededByProductRecommendationsAnalyticsProvider);
    getSearchEventRequestPayload(): {
        queryText: string;
        responseTime: number;
        results: never[];
        numberOfResults: number;
    };
    getBaseMetadata(): {
        recommendation: string;
    };
    getSearchUID(): string;
    getPipeline(): string;
    getOriginLevel1(): string;
    getOriginLevel2(): string;
    getOriginLevel3(): string;
    private mapResultsToAnalyticsDocument;
    private get responseTime();
    private get numberOfResults();
}
