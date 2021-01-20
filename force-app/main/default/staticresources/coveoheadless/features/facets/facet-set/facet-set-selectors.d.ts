import { SearchSection } from '../../../state/state-sections';
import { FacetSection } from '../../../state/state-sections';
import { FacetResponse, FacetValue } from './interfaces/response';
export declare const baseFacetResponseSelector: (state: SearchSection, id: string) => import("../range-facets/date-facet-set/interfaces/response").DateFacetResponse | import("../range-facets/numeric-facet-set/interfaces/response").NumericFacetResponse | FacetResponse | import("../category-facet-set/interfaces/response").CategoryFacetResponse | undefined;
export declare const facetRequestSelector: (state: FacetSection, id: string) => import("./interfaces/request").FacetRequest;
export declare const facetResponseSelector: (state: FacetSection & SearchSection, facetId: string) => FacetResponse | undefined;
export declare const facetResponseSelectedValuesSelector: (state: SearchSection & FacetSection, facetId: string) => FacetValue[];
