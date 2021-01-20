import { CategoryFacetSearchResponse } from '../../../../api/search/facet-search/category-facet-search/category-facet-search-response';
import { FacetSearchSetState, FacetSearchState } from '../facet-search-reducer-helpers';
export declare type CategoryFacetSearchState = FacetSearchState<CategoryFacetSearchResponse>;
export declare type CategoryFacetSearchSetState = FacetSearchSetState<CategoryFacetSearchResponse>;
export declare function getCategoryFacetSearchSetInitialState(): CategoryFacetSearchSetState;
