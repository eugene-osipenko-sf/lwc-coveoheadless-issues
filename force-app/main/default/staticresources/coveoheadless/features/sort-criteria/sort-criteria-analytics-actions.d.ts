import { AnalyticsType } from '../analytics/analytics-utils';
/**
 * Log results sort
 */
export declare const logResultsSort: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
