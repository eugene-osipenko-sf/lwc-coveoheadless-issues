import { SearchEventPayload as SearchEventPayloadAlias, CustomEventPayload as CustomEventPayloadAlias, ClickEventPayload as ClickEventPayloadAlias } from './analytics-actions';
export declare namespace AnalyticsActions {
    type SearchEventPayload = SearchEventPayloadAlias;
    type CustomEventPayload = CustomEventPayloadAlias;
    type ClickEventPayload = ClickEventPayloadAlias;
    const logInterfaceLoad: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logInterfaceChange: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logClickEvent: (p: ClickEventPayloadAlias) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Click;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logCustomEvent: (p: CustomEventPayloadAlias) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Custom;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logSearchEvent: (p: SearchEventPayloadAlias) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace DidYouMeanAnalyticsActions {
    const logDidYouMeanClick: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logDidYouMeanAutomatic: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace FacetAnalyticsActions {
    const logFacetShowMore: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logFacetShowLess: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logFacetSelect: (payload: import("../facets/facet-set/facet-set-analytics-actions-utils").FacetSelectionChangeMetadata) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logFacetDeselect: (payload: import("../facets/facet-set/facet-set-analytics-actions-utils").FacetSelectionChangeMetadata) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logFacetClearAll: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logFacetSearch: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logFacetUpdateSort: (payload: import("../facets/facet-set/facet-set-analytics-actions-utils").FacetUpdateSortMetadata) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logFacetBreadcrumb: (payload: import("../facets/facet-set/facet-set-analytics-actions-utils").FacetSelectionChangeMetadata) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace FacetGenericAnalyticsActions {
    const logClearBreadcrumbs: () => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace DateFacetAnalyticsActions {
    const logDateFacetBreadcrumb: (payload: import("../facets/range-facets/generic/range-facet-validate-payload").RangeFacetSelectionPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace NumericFacetAnalyticsActions {
    const logNumericFacetBreadcrumb: (payload: import("../facets/range-facets/generic/range-facet-validate-payload").RangeFacetSelectionPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace CategoryFacetAnalyticsActions {
    const logCategoryFacetBreadcrumb: (payload: import("../facets/category-facet-set/category-facet-set-analytics-actions").CategoryFacetBreadcrumbPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace HistoryAnalyticsActions {
    const logNavigateForward: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logNavigateBackward: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace PaginationAnalyticsActions {
    const logPageNext: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logPagePrevious: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logPageNumber: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logPagerResize: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace ProductRecommendationAnalyticsActions {
    const logProductRecommendations: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace QueryAnalyticsActions {
    const logSearchboxSubmit: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace QuerySuggestAnalyticsActions {
    const logQuerySuggestionClick: ({ id, suggestion, }: {
        id: string;
        suggestion: string;
    }) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace RecommendationAnalyticsActions {
    const logRecommendationUpdate: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace RedirectionAnalyticsActions {
    const logTriggerRedirect: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace ResultAnalyticsActions {
    const logDocumentOpen: (result: import("../..").Result) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Click;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace SortCriterionAnalyticsActions {
    const logResultsSort: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
export declare namespace SearchAnalyticsActions {
    const logFetchMoreResults: import("@reduxjs/toolkit").AsyncThunk<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
    const logQueryError: (error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode) => import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics-utils").AnalyticsType.Search;
    }, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
}
