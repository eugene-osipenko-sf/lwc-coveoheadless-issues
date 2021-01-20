import { Schema } from '@coveo/bueno';
import { DateFacetRequest } from '../../../../features/facets/range-facets/date-facet-set/interfaces/request';
import { AutomaticRangeFacetOptions, ManualRangeFacetOptions } from '../../../../features/facets/range-facets/generic/interfaces/options';
declare type OptionalFacetId = Partial<Pick<AutomaticRangeFacetOptions<DateFacetRequest>, 'facetId'>>;
export declare type DateFacetOptions = OptionalFacetId & (Omit<AutomaticRangeFacetOptions<DateFacetRequest>, 'facetId'> | Omit<ManualRangeFacetOptions<DateFacetRequest>, 'facetId'>);
export declare const dateFacetOptionsSchema: Schema<Required<Partial<Pick<AutomaticRangeFacetOptions<DateFacetRequest>, "facetId">> & Pick<AutomaticRangeFacetOptions<DateFacetRequest>, "field" | "sortCriteria" | "filterFacetCount" | "injectionDepth" | "numberOfValues" | "generateAutomaticRanges" | "currentValues">> | Required<Partial<Pick<AutomaticRangeFacetOptions<DateFacetRequest>, "facetId">> & Pick<ManualRangeFacetOptions<DateFacetRequest>, "field" | "sortCriteria" | "filterFacetCount" | "injectionDepth" | "numberOfValues" | "generateAutomaticRanges" | "currentValues">>>;
export {};
