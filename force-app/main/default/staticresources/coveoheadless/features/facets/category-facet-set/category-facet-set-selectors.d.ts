import { CategoryFacetSection, SearchSection } from '../../../state/state-sections';
import { CategoryFacetResponse } from './interfaces/response';
export declare const categoryFacetResponseSelector: (state: CategoryFacetSection & SearchSection, facetId: string) => CategoryFacetResponse | undefined;
export declare const categoryFacetRequestSelector: (state: CategoryFacetSection, id: string) => import("./interfaces/request").CategoryFacetRequest | undefined;
export declare const categoryFacetSelectedValuesSelector: (state: CategoryFacetSection & SearchSection, facetId: string) => import("./interfaces/response").CategoryFacetValue[];
