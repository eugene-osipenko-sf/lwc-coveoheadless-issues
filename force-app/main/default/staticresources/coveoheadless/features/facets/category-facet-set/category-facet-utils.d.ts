import { CategoryFacetValueRequest } from './interfaces/request';
import { CategoryFacetValue } from './interfaces/response';
declare type GenericCategoryFacetValue = CategoryFacetValueRequest | CategoryFacetValue;
declare type CategoryFacetValuePartition<T extends GenericCategoryFacetValue> = {
    parents: T[];
    values: T[];
};
export declare function partitionIntoParentsAndValues<T extends GenericCategoryFacetValue>(nestedValues: T[] | undefined): CategoryFacetValuePartition<T>;
export declare const getAnalyticsActionForCategoryFacetToggleSelect: (facetId: string, selection: CategoryFacetValue) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: import("../../analytics/analytics-utils").AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export {};
