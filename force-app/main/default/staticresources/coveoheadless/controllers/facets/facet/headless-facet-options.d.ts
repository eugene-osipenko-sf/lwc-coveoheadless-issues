import { Schema } from '@coveo/bueno';
import { FacetSearchRequestOptions } from '../../../api/search/facet-search/base/base-facet-search-request';
import { FacetRegistrationOptions } from '../../../features/facets/facet-set/interfaces/options';
declare type OptionalFacetId = Partial<Pick<FacetRegistrationOptions, 'facetId'>>;
export declare type FacetOptions = OptionalFacetId & Omit<FacetRegistrationOptions, 'facetId'> & {
    facetSearch?: Partial<FacetSearchRequestOptions>;
};
export declare const facetOptionsSchema: Schema<Required<FacetOptions>>;
export {};
