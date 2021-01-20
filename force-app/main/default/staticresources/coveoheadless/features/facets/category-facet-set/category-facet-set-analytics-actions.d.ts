import { AnalyticsType } from '../../analytics/analytics-utils';
export interface CategoryFacetBreadcrumbPayload {
    categoryFacetId: string;
    categoryFacetPath: string[];
}
/**
 * Logs a category facet breadcrumb event.
 * @param payload (CategoryFacetBreadcrumbPayload) Object specifying the target facet and path.
 */
export declare const logCategoryFacetBreadcrumb: (payload: CategoryFacetBreadcrumbPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
