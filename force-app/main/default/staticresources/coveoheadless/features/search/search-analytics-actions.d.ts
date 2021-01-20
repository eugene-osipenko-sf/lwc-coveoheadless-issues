import { SearchAPIErrorWithStatusCode } from '../../api/search/search-api-error-response';
import { AnalyticsType } from '../analytics/analytics-utils';
export declare const logFetchMoreResults: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logQueryError: (error: SearchAPIErrorWithStatusCode) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
