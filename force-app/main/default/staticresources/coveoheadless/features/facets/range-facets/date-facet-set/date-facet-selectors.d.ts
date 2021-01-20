import { DateFacetResponse, DateFacetValue } from './interfaces/response';
import { DateFacetSection, SearchSection } from '../../../../state/state-sections';
export declare const dateFacetResponseSelector: (state: SearchSection & DateFacetSection, facetId: string) => DateFacetResponse | undefined;
export declare const dateFacetSelectedValuesSelector: (state: SearchSection & DateFacetSection, facetId: string) => DateFacetValue[];
