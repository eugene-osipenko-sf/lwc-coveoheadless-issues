import { CategoryFacetRequest } from './request';
declare type CategoryFacetRequiredParameters = Pick<CategoryFacetRequest, 'facetId' | 'field'>;
export declare type CategoryFacetOptionalParameters = Pick<CategoryFacetRequest, 'delimitingCharacter' | 'filterFacetCount' | 'injectionDepth' | 'numberOfValues' | 'sortCriteria' | 'basePath' | 'filterByBasePath'>;
export declare type CategoryFacetRegistrationOptions = CategoryFacetRequiredParameters & Partial<CategoryFacetOptionalParameters>;
export {};
