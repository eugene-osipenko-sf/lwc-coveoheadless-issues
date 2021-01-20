import { Schema } from '@coveo/bueno';
import { AutomaticRangeFacetOptions, ManualRangeFacetOptions } from '../../../../features/facets/range-facets/generic/interfaces/options';
import { NumericFacetRequest } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/request';
declare type OptionalFacetId = Partial<Pick<AutomaticRangeFacetOptions<NumericFacetRequest>, 'facetId'>>;
export declare type NumericFacetOptions = OptionalFacetId & (Omit<AutomaticRangeFacetOptions<NumericFacetRequest>, 'facetId'> | Omit<ManualRangeFacetOptions<NumericFacetRequest>, 'facetId'>);
export declare const numericFacetOptionsSchema: Schema<Required<Partial<Pick<AutomaticRangeFacetOptions<NumericFacetRequest>, "facetId">> & Pick<AutomaticRangeFacetOptions<NumericFacetRequest>, "field" | "sortCriteria" | "filterFacetCount" | "injectionDepth" | "numberOfValues" | "generateAutomaticRanges" | "currentValues">> | Required<Partial<Pick<AutomaticRangeFacetOptions<NumericFacetRequest>, "facetId">> & Pick<ManualRangeFacetOptions<NumericFacetRequest>, "field" | "sortCriteria" | "filterFacetCount" | "injectionDepth" | "numberOfValues" | "generateAutomaticRanges" | "currentValues">>>;
export {};
