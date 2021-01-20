import { RangeFacetRequest, RangeFacetResponse, RangeFacetValue } from './interfaces/range-facet';
import { RangeFacetOptionalParameters } from './interfaces/options';
export declare const defaultRangeFacetOptions: RangeFacetOptionalParameters;
export declare function registerRangeFacet<T extends RangeFacetRequest>(state: Record<string, T>, request: T): void;
export declare function toggleSelectRangeValue<T extends RangeFacetRequest, U extends RangeFacetValue>(state: Record<string, T>, facetId: string, selection: U): void;
export declare function handleRangeFacetDeselectAll<T extends RangeFacetRequest>(state: Record<string, T>, facetId: string): void;
export declare function handleRangeFacetSearchParameterRestoration<T extends RangeFacetRequest>(state: Record<string, T>, rangeFacets: Record<string, T['currentValues']>): void;
export declare function onRangeFacetRequestFulfilled<T extends RangeFacetRequest, U extends RangeFacetResponse>(state: Record<string, T>, facets: U[], convert: (values: U['values']) => T['currentValues']): void;
