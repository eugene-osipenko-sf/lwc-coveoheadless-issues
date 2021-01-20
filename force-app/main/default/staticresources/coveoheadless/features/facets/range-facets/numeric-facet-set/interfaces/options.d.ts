import { ManualRangeFacetOptions, AutomaticRangeFacetOptions } from '../../generic/interfaces/options';
import { NumericFacetRequest } from './request';
declare type ManualNumericFacetOptions = ManualRangeFacetOptions<NumericFacetRequest>;
declare type AutomaticNumericFacetOptions = AutomaticRangeFacetOptions<NumericFacetRequest>;
export declare type NumericFacetRegistrationOptions = ManualNumericFacetOptions | AutomaticNumericFacetOptions;
export {};
