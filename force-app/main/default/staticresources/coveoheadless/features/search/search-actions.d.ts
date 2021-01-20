import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { SearchResponseSuccess } from '../../api/search/search/search-response';
import { AdvancedSearchQueriesSection, CategoryFacetSection, ConfigurationSection, ContextSection, DateFacetSection, DebugSection, DidYouMeanSection, FacetOptionsSection, FacetOrderSection, FacetSection, FieldsSection, NumericFacetSection, PaginationSection, PipelineSection, QuerySection, QuerySetSection, SearchHubSection, SearchSection, SortSection } from '../../state/state-sections';
import { SearchRequest } from '../../api/search/search/search-request';
import { SearchAction } from '../analytics/analytics-utils';
export declare type StateNeededByExecuteSearch = ConfigurationSection & Partial<QuerySection & AdvancedSearchQueriesSection & PaginationSection & SortSection & FacetSection & NumericFacetSection & CategoryFacetSection & DateFacetSection & ContextSection & DidYouMeanSection & FieldsSection & PipelineSection & SearchHubSection & QuerySetSection & FacetOptionsSection & FacetOrderSection & DebugSection & SearchSection>;
export interface ExecuteSearchThunkReturn {
    /** The successful search response. */
    response: SearchResponseSuccess;
    /** The number of milliseconds it took to receive the response. */
    duration: number;
    /** The query that was executed. */
    queryExecuted: string;
    /** Whether the query was automatically corrected. */
    automaticallyCorrected: boolean;
    /** The analytics action to log after the query. */
    analyticsAction: SearchAction;
}
/**
 * Executes a search query.
 * @param analyticsAction (SearchAction) The analytics action to log after a successful query.
 */
/**
 * Executes a search query.
 * @param analyticsAction (SearchAction) The analytics action to log after a successful query.
 */
export declare const executeSearch: import("@reduxjs/toolkit").AsyncThunk<ExecuteSearchThunkReturn, import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: import("../analytics/analytics-utils").AnalyticsType.Search;
}, void | {}, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>, AsyncThunkSearchOptions<StateNeededByExecuteSearch>>;
export declare const fetchMoreResults: import("@reduxjs/toolkit").AsyncThunk<ExecuteSearchThunkReturn, void, AsyncThunkSearchOptions<StateNeededByExecuteSearch>>;
export declare const buildSearchRequest: (state: StateNeededByExecuteSearch) => SearchRequest;
