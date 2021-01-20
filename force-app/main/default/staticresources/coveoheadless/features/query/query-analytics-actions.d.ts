import { AnalyticsType } from '../analytics/analytics-utils';
/**
 * Log searchbox submit
 */
export declare const logSearchboxSubmit: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
