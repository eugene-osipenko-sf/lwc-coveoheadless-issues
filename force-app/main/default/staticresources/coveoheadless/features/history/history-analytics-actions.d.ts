import { AnalyticsType } from '../analytics/analytics-utils';
/**
 * Logs an event which represents a move forward in the interface history.
 */
export declare const logNavigateForward: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs an event which represents a move backward in the interface history.
 */
export declare const logNavigateBackward: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
