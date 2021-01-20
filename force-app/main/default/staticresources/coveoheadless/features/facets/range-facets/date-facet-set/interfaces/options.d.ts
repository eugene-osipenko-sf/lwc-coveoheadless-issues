import { ManualRangeFacetOptions, AutomaticRangeFacetOptions } from '../../generic/interfaces/options';
import { DateFacetRequest } from './request';
declare type ManualDateFacetOptions = ManualRangeFacetOptions<DateFacetRequest>;
declare type AutomaticDateFacetOptions = AutomaticRangeFacetOptions<DateFacetRequest>;
export declare type DateFacetRegistrationOptions = ManualDateFacetOptions | AutomaticDateFacetOptions;
export {};
