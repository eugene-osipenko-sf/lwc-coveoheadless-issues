import { AutomaticRanges } from './request';
import { RangeFacetRequest } from './range-facet';
declare type RangeFacetRequiredParameters = Pick<RangeFacetRequest, 'facetId' | 'field'>;
export declare type RangeFacetOptionalParameters = Pick<RangeFacetRequest, 'filterFacetCount' | 'injectionDepth' | 'numberOfValues' | 'sortCriteria'>;
export declare type ManualRangeFacetOptions<T extends RangeFacetRequest> = RangeFacetRequiredParameters & Pick<T, 'currentValues'> & AutomaticRanges<false> & Partial<RangeFacetOptionalParameters>;
export declare type AutomaticRangeFacetOptions<T extends RangeFacetRequest> = RangeFacetRequiredParameters & Partial<Pick<T, 'currentValues'>> & AutomaticRanges<true> & Partial<RangeFacetOptionalParameters>;
export {};
