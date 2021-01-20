import { RangeFacetValue } from './interfaces/range-facet';
export declare const isRangeFacetValueSelected: (selection: RangeFacetValue) => boolean;
export declare const getAnalyticsActionForToggleRangeFacetSelect: (facetId: string, selection: RangeFacetValue) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: import("../../../analytics/analytics-utils").AnalyticsType.Search;
}, void, import("../../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
