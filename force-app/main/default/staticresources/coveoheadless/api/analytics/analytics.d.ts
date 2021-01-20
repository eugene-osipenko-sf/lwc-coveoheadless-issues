import { CoveoSearchPageClient, SearchPageClientProvider, history, AnalyticsClientSendEventHook } from 'coveo.analytics';
import { Logger } from 'pino';
import { ConfigurationSection, ContextSection, PipelineSection, QuerySection, SearchHubSection, SearchSection } from '../../state/state-sections';
export declare type StateNeededByAnalyticsProvider = ConfigurationSection & Partial<SearchHubSection & SearchSection & PipelineSection & QuerySection & ContextSection>;
export declare class AnalyticsProvider implements SearchPageClientProvider {
    private state;
    constructor(state: StateNeededByAnalyticsProvider);
    getSearchEventRequestPayload(): {
        queryText: string;
        responseTime: number;
        results: {
            documentUri: string;
            documentUriHash: string;
        }[] | undefined;
        numberOfResults: number;
        getBaseMetadata: Record<string, string | string[]>;
    };
    getBaseMetadata(): Record<string, string | string[]>;
    getSearchUID(): string;
    getPipeline(): string;
    getOriginLevel1(): string;
    getOriginLevel2(): string;
    getOriginLevel3(): string;
    private mapResultsToAnalyticsDocument;
    private get queryText();
    private get responseTime();
    private get numberOfResults();
}
interface ConfigureAnalyticsOptions {
    state: StateNeededByAnalyticsProvider;
    logger: Logger;
    analyticsClientMiddleware?: AnalyticsClientSendEventHook;
    provider?: SearchPageClientProvider;
}
export declare const configureAnalytics: ({ logger, state, analyticsClientMiddleware, provider, }: ConfigureAnalyticsOptions) => CoveoSearchPageClient;
export declare const getVisitorID: () => string;
export declare const historyStore: history.HistoryStore;
export {};
