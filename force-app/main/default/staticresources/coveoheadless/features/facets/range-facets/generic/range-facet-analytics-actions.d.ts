import { AnalyticsType } from '../../../analytics/analytics-utils';
import { RangeFacetSelectionPayload } from './range-facet-validate-payload';
/**
 * Logs a range facet breadcrumb event.
 * @param payload (RangeFacetSelectionPayload) Object specifying the target facet and selection.
 */
export declare const logRangeFacetBreadcrumb: (payload: RangeFacetSelectionPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
