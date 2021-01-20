import { AnalyticsType } from '../../analytics/analytics-utils';
import { FacetSelectionChangeMetadata, FacetUpdateSortMetadata } from './facet-set-analytics-actions-utils';
/**
 * Logs a facet show more event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const logFacetShowMore: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet show less event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const logFacetShowLess: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet search event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const logFacetSearch: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet sort event.
 * @param payload (FacetUpdateSortMetadata) Object specifying the facet and sort criterion.
 */
export declare const logFacetUpdateSort: (payload: FacetUpdateSortMetadata) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet clear all event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const logFacetClearAll: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet value selection event.
 * @param payload (FacetSelectionChangeMetadata) Object specifying the target facet and value.
 */
export declare const logFacetSelect: (payload: FacetSelectionChangeMetadata) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet deselect event.
 * @param payload (FacetSelectionChangeMetadata) Object specifying the target facet and value.
 */
export declare const logFacetDeselect: (payload: FacetSelectionChangeMetadata) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet breadcrumb event.
 * @param payload (FacetSelectionChangeMetadata) Object specifying the target facet and value.
 */
export declare const logFacetBreadcrumb: (payload: FacetSelectionChangeMetadata) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
