export declare namespace AdvancedSearchQueriesActions {
    const updateAdvancedSearchQueries: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        aq?: string | undefined;
        cq?: string | undefined;
    }], {
        aq?: string | undefined;
        cq?: string | undefined;
    }, "advancedSearchQueries/update", never, never>;
}
export declare namespace CategoryFacetSetActions {
    const registerCategoryFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: import("./facets/category-facet-set/interfaces/options").CategoryFacetRegistrationOptions], import("./facets/category-facet-set/interfaces/options").CategoryFacetRegistrationOptions, "categoryFacet/register", never, never>;
    const toggleSelectCategoryFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        selection: import("..").CategoryFacetValue;
        retrieveCount: number;
    }], {
        facetId: string;
        selection: import("..").CategoryFacetValue;
        retrieveCount: number;
    }, "categoryFacet/toggleSelectValue", import("@reduxjs/toolkit").SerializedError | null, never>;
    const deselectAllCategoryFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
    const updateCategoryFacetNumberOfValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        numberOfValues: number;
    }], {
        facetId: string;
        numberOfValues: number;
    }, "facet/updateNumberOfValues", never, never>;
    const updateCategoryFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        criterion: "alphanumeric" | "occurrences";
    }], {
        facetId: string;
        criterion: "alphanumeric" | "occurrences";
    }, "categoryFacet/updateSortCriterion", never, never>;
}
export declare namespace FacetActions {
    const registerFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: import("./facets/facet-set/interfaces/options").FacetRegistrationOptions], import("./facets/facet-set/interfaces/options").FacetRegistrationOptions, "facet/register", never, never>;
    const toggleSelectFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        selection: import("..").FacetValue;
    }], {
        facetId: string;
        selection: import("..").FacetValue;
    }, "facet/toggleSelectValue", never, never>;
    const updateFacetIsFieldExpanded: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        isFieldExpanded: boolean;
    }], {
        facetId: string;
        isFieldExpanded: boolean;
    }, "facet/updateIsFieldExpanded", never, never>;
    const updateFacetNumberOfValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        numberOfValues: number;
    }], {
        facetId: string;
        numberOfValues: number;
    }, "facet/updateNumberOfValues", never, never>;
    const updateFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        criterion: "score" | "alphanumeric" | "occurrences" | "automatic";
    }], {
        facetId: string;
        criterion: "score" | "alphanumeric" | "occurrences" | "automatic";
    }, "facet/updateSortCriterion", never, never>;
    const updateFreezeCurrentValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        freezeCurrentValues: boolean;
    }], {
        facetId: string;
        freezeCurrentValues: boolean;
    }, "facet/updateFreezeCurrentValues", never, never>;
    const deselectAllFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
}
export declare namespace ConfigurationActions {
    const updateBasicConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        accessToken?: string | undefined;
        organizationId?: string | undefined;
        platformUrl?: string | undefined;
    }], {
        accessToken?: string | undefined;
        organizationId?: string | undefined;
        platformUrl?: string | undefined;
    }, "configuration/updateBasicConfiguration", never, never>;
    const updateSearchConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        apiBaseUrl?: string | undefined;
        pipeline?: string | undefined;
        searchHub?: string | undefined;
    }], {
        apiBaseUrl?: string | undefined;
        pipeline?: string | undefined;
        searchHub?: string | undefined;
    }, "configuration/updateSearchConfiguration", never, never>;
    const updateAnalyticsConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        enabled?: boolean | undefined;
        originLevel2?: string | undefined;
        originLevel3?: string | undefined;
        apiBaseUrl?: string | undefined;
        runtimeEnvironment?: import("coveo.analytics").IRuntimeEnvironment | undefined;
    }], {
        enabled?: boolean | undefined;
        originLevel2?: string | undefined;
        originLevel3?: string | undefined;
        apiBaseUrl?: string | undefined;
        runtimeEnvironment?: import("coveo.analytics").IRuntimeEnvironment | undefined;
    }, "configuration/updateAnalyticsConfiguration", never, never>;
    const renewAccessToken: import("@reduxjs/toolkit").AsyncThunk<string, () => Promise<string>, {}>;
    const disableAnalytics: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"configuration/analytics/disable">;
    const enableAnalytics: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"configuration/analytics/enable">;
    const setOriginLevel2: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        originLevel2: string;
    }], {
        originLevel2: string;
    }, "configuration/analytics/originlevel2", never, never>;
    const setOriginLevel3: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        originLevel3: string;
    }], {
        originLevel3: string;
    }, "configuration/analytics/originlevel3", never, never>;
}
export declare namespace ContextActions {
    const setContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: Record<string, string | string[]>], Record<string, string | string[]>, "context/set", never, never>;
    const addContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        contextKey: string;
        contextValue: string | string[];
    }], {
        contextKey: string;
        contextValue: string | string[];
    }, "context/add", never, never>;
    const removeContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "context/remove", never, never>;
}
export declare namespace DateFacetActions {
    const registerDateFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: import("./facets/range-facets/date-facet-set/interfaces/options").DateFacetRegistrationOptions], import("./facets/range-facets/date-facet-set/interfaces/options").DateFacetRegistrationOptions, "dateFacet/register", never, never>;
    const toggleSelectDateFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        selection: import("..").DateFacetValue;
    }], {
        facetId: string;
        selection: import("..").DateFacetValue;
    }, "dateFacet/toggleSelectValue", never, never>;
    const updateDateFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        criterion: "ascending" | "descending";
    }], {
        facetId: string;
        criterion: "ascending" | "descending";
    }, "rangeFacet/updateSortCriterion", never, never>;
    const deselectAllDateFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
}
export declare namespace DidYouMeanActions {
    const enableDidYouMean: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"didYouMean/enable">;
    const applyDidYouMeanCorrection: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "didYouMean/correction", never, never>;
    const disableDidYouMean: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"didYouMean/disable">;
}
export declare namespace FieldActions {
    const registerFieldsToInclude: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string[]], string[], "fields/registerFieldsToInclude", never, never>;
}
export declare namespace HistoryActions {
    const snapshot: import("@reduxjs/toolkit").ActionCreatorWithPayload<import("./history/history-state").HistoryState, string>;
    const back: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
    const change: import("@reduxjs/toolkit").AsyncThunk<import("./history/history-state").HistoryState, void, {}>;
    const forward: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
}
export declare namespace NumericFacetActions {
    const registerNumericFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: import("./facets/range-facets/numeric-facet-set/interfaces/options").NumericFacetRegistrationOptions], import("./facets/range-facets/numeric-facet-set/interfaces/options").NumericFacetRegistrationOptions, "numericFacet/register", never, never>;
    const deselectAllNumericFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
    const toggleSelectNumericFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        selection: import("..").NumericFacetValue;
    }], {
        facetId: string;
        selection: import("..").NumericFacetValue;
    }, "numericFacet/toggleSelectValue", never, never>;
    const updateNumericFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        facetId: string;
        criterion: "ascending" | "descending";
    }], {
        facetId: string;
        criterion: "ascending" | "descending";
    }, "rangeFacet/updateSortCriterion", never, never>;
}
export { ResultTemplatesManager, buildResultTemplatesManager, } from './result-templates/result-templates-manager';
export declare namespace PaginationActions {
    const registerNumberOfResults: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: number], number, "pagination/registerNumberOfResults", never, never>;
    const registerPage: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: number], number, "pagination/registerPage", never, never>;
    const nextPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"pagination/nextPage">;
    const previousPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"pagination/previousPage">;
    const updateNumberOfResults: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: number], number, "pagination/updateNumberOfResults", never, never>;
    const updatePage: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: number], number, "pagination/updatePage", never, never>;
}
export declare namespace PipelineActions {
    const setPipeline: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "pipeline/set", never, never>;
}
export declare namespace QueryActions {
    const updateQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: Partial<import("./query/query-state").QueryState>], Partial<import("./query/query-state").QueryState>, "query/updateQuery", never, never>;
}
export declare namespace QuerySetActions {
    const registerQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        id: string;
        query: string;
    }], {
        id: string;
        query: string;
    }, "querySet/register", never, never>;
    const updateQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        id: string;
        query: string;
    }], {
        id: string;
        query: string;
    }, "querySet/update", never, never>;
}
import { QuerySuggestionID as QuerySuggestionIDAlias, StateNeededByQuerySuggest as StateNeededByQuerySuggestAlias } from './query-suggest/query-suggest-actions';
export declare namespace QuerySuggestActions {
    const registerQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        id: string;
        q?: string | undefined;
        count?: number | undefined;
    }], {
        id: string;
        q?: string | undefined;
        count?: number | undefined;
    }, "querySuggest/register", never, never>;
    const buildQuerySuggestRequest: (id: string, s: StateNeededByQuerySuggestAlias) => import("../api/search/query-suggest/query-suggest-request").QuerySuggestRequest;
    const clearQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        id: string;
    }], {
        id: string;
    }, "querySuggest/clear", never, never>;
    const clearQuerySuggestCompletions: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        id: string;
    }], {
        id: string;
    }, "querySuggest/clearSuggestions", never, never>;
    const fetchQuerySuggestions: import("@reduxjs/toolkit").AsyncThunk<QuerySuggestionIDAlias & import("../api/search/query-suggest/query-suggest-response").QuerySuggestSuccessResponse, QuerySuggestionIDAlias, import("../api/search/search-api-client").AsyncThunkSearchOptions<StateNeededByQuerySuggestAlias> & {
        rejectValue: import("../api/search/search-api-error-response").SearchAPIErrorWithStatusCode & QuerySuggestionIDAlias;
    }>;
    type QuerySuggestionID = QuerySuggestionIDAlias;
    const selectQuerySuggestion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        id: string;
        expression: string;
    }], {
        id: string;
        expression: string;
    }, "querySuggest/selectSuggestion", never, never>;
    type StateNeededByQuerySuggest = StateNeededByQuerySuggestAlias;
    const unregisterQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        id: string;
    }], {
        id: string;
    }, "querySuggest/unregister", never, never>;
}
import { RedirectionState as RedirectionStateAlias } from './redirection/redirection-actions';
export declare namespace RedirectionActions {
    const checkForRedirection: import("@reduxjs/toolkit").AsyncThunk<string, {
        defaultRedirectionUrl: string;
    }, import("../api/search/search-api-client").AsyncThunkSearchOptions<RedirectionStateAlias>>;
    type RedirectionState = RedirectionStateAlias;
    const buildPlanRequest: (state: RedirectionStateAlias) => import("../api/search/plan/plan-request").PlanRequest;
}
import { StateNeededByExecuteSearch as StateNeededByExecuteSearchAlias, ExecuteSearchThunkReturn as ExecuteSearchThunkReturnAlias } from './search/search-actions';
export declare namespace SearchActions {
    type StateNeededByExecuteSearch = StateNeededByExecuteSearchAlias;
    type ExecuteSearchThunkReturn = ExecuteSearchThunkReturnAlias;
    const executeSearch: import("@reduxjs/toolkit").AsyncThunk<ExecuteSearchThunkReturnAlias, import("@reduxjs/toolkit").AsyncThunkAction<{
        analyticsType: import("./analytics/analytics-utils").AnalyticsType.Search;
    }, void | {}, import("./analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../api/analytics/analytics").StateNeededByAnalyticsProvider>>, import("../api/search/search-api-client").AsyncThunkSearchOptions<StateNeededByExecuteSearchAlias>>;
    const buildSearchRequest: (state: StateNeededByExecuteSearchAlias) => import("../api/search/search/search-request").SearchRequest;
    const fetchMoreResults: import("@reduxjs/toolkit").AsyncThunk<ExecuteSearchThunkReturnAlias, void, import("../api/search/search-api-client").AsyncThunkSearchOptions<StateNeededByExecuteSearchAlias>>;
}
export declare namespace SearchHubActions {
    const setSearchHub: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "searchHub/set", never, never>;
}
export declare namespace SortCriterionActions {
    const registerSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: import("..").SortByRelevancy | import("..").SortByQRE | import("..").SortByDate | import("..").SortByField | import("..").SortByNoSort | import("..").SortCriterion[]], import("..").SortByRelevancy | import("..").SortByQRE | import("..").SortByDate | import("..").SortByField | import("..").SortByNoSort | import("..").SortCriterion[], "sortCriteria/register", never, never>;
    const updateSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: import("..").SortByRelevancy | import("..").SortByQRE | import("..").SortByDate | import("..").SortByField | import("..").SortByNoSort | import("..").SortCriterion[]], import("..").SortByRelevancy | import("..").SortByQRE | import("..").SortByDate | import("..").SortByField | import("..").SortByNoSort | import("..").SortCriterion[], "sortCriteria/update", never, never>;
}
import { GetRecommendationsThunkReturn as GetRecommendationsThunkReturnAlias, StateNeededByGetRecommendations as StateNeededByGetRecommendationsAlias } from './recommendation/recommendation-actions';
export declare namespace RecommendationActions {
    const buildRecommendationRequest: (s: StateNeededByGetRecommendationsAlias) => import("../api/search/recommendation/recommendation-request").RecommendationRequest;
    const getRecommendations: import("@reduxjs/toolkit").AsyncThunk<GetRecommendationsThunkReturnAlias, void, import("../api/search/search-api-client").AsyncThunkSearchOptions<StateNeededByGetRecommendationsAlias>>;
    type GetRecommendationsThunkReturn = GetRecommendationsThunkReturnAlias;
    const setRecommendationId: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        id: string;
    }], {
        id: string;
    }, "recommendation/set", never, never>;
    type StateNeededByGetRecommendations = StateNeededByGetRecommendationsAlias;
}
import { GetProductRecommendationsThunkReturn as GetProductRecommendationsThunkReturnAlias, StateNeededByGetProductRecommendations as StateNeededByGetProductRecommendationsAlias } from './product-recommendations/product-recommendations-actions';
export declare namespace ProductRecommendationsActions {
    const setProductRecommendationsBrandFilter: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        brand: string;
    }], {
        brand: string;
    }, "productrecommendations/setBrand", never, never>;
    const buildProductRecommendationsRequest: (s: StateNeededByGetProductRecommendationsAlias) => import("../api/search/product-recommendations/product-recommendations-request").ProductRecommendationsRequest;
    const getProductRecommendations: import("@reduxjs/toolkit").AsyncThunk<GetProductRecommendationsThunkReturnAlias, void, import("../api/search/search-api-client").AsyncThunkSearchOptions<StateNeededByGetProductRecommendationsAlias>>;
    const setProductRecommendationsCategoryFilter: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        category: string;
    }], {
        category: string;
    }, "productrecommendations/setCategory", never, never>;
    type GetProductRecommendationsThunkReturn = GetProductRecommendationsThunkReturnAlias;
    const setProductRecommendationsMaxNumberOfRecommendations: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        number: number;
    }], {
        number: number;
    }, "productrecommendations/setMaxNumberOfRecommendations", never, never>;
    const setProductRecommendationsRecommenderId: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        id: string;
    }], {
        id: string;
    }, "productrecommendations/setId", never, never>;
    const setProductRecommendationsSkus: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
        skus: string[];
    }], {
        skus: string[];
    }, "productrecommendations/setSku", never, never>;
    type StateNeededByGetProductRecommendations = StateNeededByGetProductRecommendationsAlias;
}
export declare namespace BreadcrumbActions {
    const deselectAllFacets: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"facet/deselectAllFacets">;
}
export declare namespace ResultTemplatesHelpers {
    const getResultProperty: (result: import("..").Result, property: string) => unknown;
    const fieldsMustBeDefined: (fieldNames: string[]) => import("..").ResultTemplateCondition;
    const fieldsMustNotBeDefined: (fieldNames: string[]) => import("..").ResultTemplateCondition;
    const fieldMustMatch: (fieldName: string, valuesToMatch: string[]) => import("..").ResultTemplateCondition;
    const fieldMustNotMatch: (fieldName: string, blacklistedValues: string[]) => import("..").ResultTemplateCondition;
}
