import { AnalyticsType } from '../analytics/analytics-utils';
export declare const logQuerySuggestionClick: ({ id, suggestion, }: {
    id: string;
    suggestion: string;
}) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
