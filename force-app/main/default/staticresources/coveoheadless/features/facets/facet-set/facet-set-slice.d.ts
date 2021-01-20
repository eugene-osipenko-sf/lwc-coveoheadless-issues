import { FacetRequest, FacetValueRequest } from './interfaces/request';
import { FacetValue } from './interfaces/response';
import { FacetOptionalParameters } from './interfaces/options';
export declare const facetSetReducer: import("redux").Reducer<Record<string, FacetRequest>, import("redux").AnyAction>;
export declare const defaultFacetOptions: FacetOptionalParameters;
export declare function convertFacetValueToRequest(facetValue: FacetValue): FacetValueRequest;
