import { SpecificFacetSearchResponse } from '../../../../api/search/facet-search/specific-facet-search/specific-facet-search-response';
import { FacetSearchSetState, FacetSearchState } from '../facet-search-reducer-helpers';
export declare type SpecificFacetSearchState = FacetSearchState<SpecificFacetSearchResponse>;
export declare type SpecificFacetSearchSetState = FacetSearchSetState<SpecificFacetSearchResponse>;
export declare function getFacetSearchSetInitialState(): SpecificFacetSearchSetState;
