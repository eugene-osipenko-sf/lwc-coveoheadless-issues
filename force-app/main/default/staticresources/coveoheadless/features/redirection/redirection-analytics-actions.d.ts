import { AnalyticsType } from '../analytics/analytics-utils';
/**
 * Log trigger redirection
 */
export declare const logTriggerRedirect: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
