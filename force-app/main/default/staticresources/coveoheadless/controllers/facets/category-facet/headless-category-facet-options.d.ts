import { Schema } from '@coveo/bueno';
import { FacetSearchRequestOptions } from '../../../api/search/facet-search/base/base-facet-search-request';
import { CategoryFacetRegistrationOptions } from '../../../features/facets/category-facet-set/interfaces/options';
declare type OptionalFacetId = Partial<Pick<CategoryFacetRegistrationOptions, 'facetId'>>;
export declare type CategoryFacetOptions = OptionalFacetId & Omit<CategoryFacetRegistrationOptions, 'facetId'> & {
    facetSearch?: Partial<FacetSearchRequestOptions>;
};
export declare const categoryFacetOptionsSchema: Schema<Required<CategoryFacetOptions>>;
export {};
