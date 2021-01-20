/**
 * Logs a numeric facet breadcrumb event.
 */
export declare const logNumericFacetBreadcrumb: (payload: import("../generic/range-facet-validate-payload").RangeFacetSelectionPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: import("../../../analytics/analytics-utils").AnalyticsType.Search;
}, void, import("../../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
