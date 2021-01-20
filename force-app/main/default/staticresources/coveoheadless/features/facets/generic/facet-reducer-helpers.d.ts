import { AnyFacetRequest } from './interfaces/generic-facet-request';
import { FacetRequest } from '../facet-set/interfaces/request';
import { CategoryFacetRequest } from '../category-facet-set/interfaces/request';
export declare function handleFacetSortCriterionUpdate<T extends AnyFacetRequest>(state: Record<string, T>, payload: {
    facetId: string;
    criterion: T['sortCriteria'];
}): void;
export declare function handleFacetDeselectAll<T extends FacetRequest | CategoryFacetRequest>(facetRequest: T | undefined): void;
export declare function handleFacetUpdateNumberOfValues<T extends AnyFacetRequest>(facetRequest: T | undefined, numberOfValues: number): void;
