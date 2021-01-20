import { CategoryFacetRequest } from './interfaces/request';
export declare type CategoryFacetSlice = {
    request: CategoryFacetRequest;
    initialNumberOfValues: number;
};
export declare type CategoryFacetSetState = Record<string, CategoryFacetSlice | undefined>;
export declare function getCategoryFacetSetInitialState(): CategoryFacetSetState;
