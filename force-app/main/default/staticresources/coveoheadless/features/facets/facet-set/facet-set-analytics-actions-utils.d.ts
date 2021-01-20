import { SearchAppState } from '../../../state/search-app-state';
import { CategoryFacetSection, DateFacetSection, FacetSection, NumericFacetSection, SearchSection } from '../../../state/state-sections';
import { RangeFacetSortCriterion } from '../range-facets/generic/interfaces/request';
import { FacetSortCriterion } from './interfaces/request';
export declare type SectionNeededForFacetMetadata = FacetSection & CategoryFacetSection & DateFacetSection & NumericFacetSection & SearchSection;
export declare type FacetUpdateSortMetadata = {
    facetId: string;
    criterion: FacetSortCriterion | RangeFacetSortCriterion;
};
export declare type FacetSelectionChangeMetadata = {
    facetId: string;
    facetValue: string;
};
export declare const buildFacetBaseMetadata: (facetId: string, state: SectionNeededForFacetMetadata) => {
    facetId: string;
    facetField: string;
    facetTitle: string;
};
export declare function buildFacetSelectionChangeMetadata(payload: FacetSelectionChangeMetadata, state: SectionNeededForFacetMetadata): {
    facetValue: string;
    facetId: string;
    facetField: string;
    facetTitle: string;
};
export declare function getStateNeededForFacetMetadata(s: Partial<SearchAppState>): SectionNeededForFacetMetadata;
export declare const buildFacetStateMetadata: (state: SectionNeededForFacetMetadata) => import("coveo.analytics/dist/definitions/events").FacetStateRequest[];
