import { NumericFacetResponse, NumericFacetValue } from './interfaces/response';
import { NumericFacetSection, SearchSection } from '../../../../state/state-sections';
export declare const numericFacetResponseSelector: (state: SearchSection & NumericFacetSection, facetId: string) => NumericFacetResponse | undefined;
export declare const numericFacetSelectedValuesSelector: (state: SearchSection & NumericFacetSection, facetId: string) => NumericFacetValue[];
