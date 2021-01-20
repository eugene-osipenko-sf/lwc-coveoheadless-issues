import { FacetRequest } from './interfaces/request';
/**
 * A map of specific facet identifer (typically, the facet field) to a facet request
 */
export declare type FacetSetState = Record<string, FacetRequest>;
export declare function getFacetSetInitialState(): FacetSetState;
