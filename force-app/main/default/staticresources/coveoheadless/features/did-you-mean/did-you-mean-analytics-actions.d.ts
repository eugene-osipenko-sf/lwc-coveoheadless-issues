import { AnalyticsType } from '../analytics/analytics-utils';
/**
 * Logs a did-you-mean click event, i.e., when a user clicks on a did-you-mean suggestion.
 */
export declare const logDidYouMeanClick: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a did-you-mean automatic event, i.e., when the interface automatically selects a did-you-mean suggestion.
 */
export declare const logDidYouMeanAutomatic: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
