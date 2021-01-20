import { FacetRequest } from '../../facet-set/interfaces/request';
import { RangeFacetRequest } from '../../range-facets/generic/interfaces/range-facet';
import { CategoryFacetRequest } from '../../category-facet-set/interfaces/request';
export declare type AnyFacetRequest = FacetRequest | RangeFacetRequest | CategoryFacetRequest;
