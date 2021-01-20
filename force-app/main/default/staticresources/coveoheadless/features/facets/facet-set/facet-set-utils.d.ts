import { FacetValue } from './interfaces/response';
export declare const isFacetValueSelected: (value: FacetValue) => boolean;
export declare const getAnalyticsActionForToggleFacetSelect: (facetId: string, selection: FacetValue) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: import("../../analytics/analytics-utils").AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
