import { Engine } from '../../../../app/headless-engine';
import { FacetSearchOptions } from '../../../../features/facets/facet-search-set/facet-search-request-options';
import { SpecificFacetSearchResult } from '../../../../api/search/facet-search/specific-facet-search/specific-facet-search-response';
import { ConfigurationSection, FacetSearchSection } from '../../../../state/state-sections';
export interface FacetSearchProps {
    options: FacetSearchOptions;
}
export declare type FacetSearch = ReturnType<typeof buildFacetSearch>;
export declare function buildFacetSearch(engine: Engine<FacetSearchSection & ConfigurationSection>, props: FacetSearchProps): {
    /**
     * Selects the provided value if unselected
     * @param result A single specificFacetSearchResult object
     */
    select(value: SpecificFacetSearchResult): void;
    state: {
        values: import("../../../../api/search/facet-search/base/base-facet-search-response").BaseFacetSearchResult[];
        isLoading: boolean;
        moreValuesAvailable: boolean;
    } | {
        values: import("../../../../api/search/facet-search/base/base-facet-search-response").BaseFacetSearchResult[];
        isLoading: boolean;
        moreValuesAvailable: boolean;
    };
    updateText(text: string): void;
    showMoreResults(): void;
    search(): void;
};
