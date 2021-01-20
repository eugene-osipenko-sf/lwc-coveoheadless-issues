import { AnalyticsType } from '../analytics/analytics-utils';
/**
 * Logs a search event with an `actionCause` value of `recommendationInterfaceLoad`.
 */
export declare const logRecommendationUpdate: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
