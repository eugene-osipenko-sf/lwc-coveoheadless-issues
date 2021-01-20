import { AnalyticsType } from '../../analytics/analytics-utils';
/**
 * Logs clear all breadcrumbs event e.g. when a user click to remove all filters at once
 */
export declare const logClearBreadcrumbs: () => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
