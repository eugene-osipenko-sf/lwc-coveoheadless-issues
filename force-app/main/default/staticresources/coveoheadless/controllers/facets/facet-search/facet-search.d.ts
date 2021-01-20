import { Engine } from '../../../app/headless-engine';
import { SpecificFacetSearchState } from '../../../features/facets/facet-search-set/specific/specific-facet-search-set-state';
import { CategoryFacetSearchState } from '../../../features/facets/facet-search-set/category/category-facet-search-set-state';
import { FacetSearchOptions } from '../../../features/facets/facet-search-set/facet-search-request-options';
import { CategoryFacetSearchSection, ConfigurationSection, FacetSearchSection } from '../../../state/state-sections';
declare type FacetSearchState = SpecificFacetSearchState | CategoryFacetSearchState;
export interface GenericFacetSearchProps<T extends FacetSearchState> {
    options: FacetSearchOptions;
    getFacetSearch: () => T;
}
export declare type GenericFacetSearch = ReturnType<typeof buildGenericFacetSearch>;
export declare function buildGenericFacetSearch<T extends FacetSearchState>(engine: Engine<ConfigurationSection & (FacetSearchSection | CategoryFacetSearchSection)>, props: GenericFacetSearchProps<T>): {
    /** Updates the facet search query.
     * @param text The new query.
     */
    updateText(text: string): void;
    /** Increases number of results returned by numberOfResults */
    showMoreResults(): void;
    /** Executes a facet search to update the values.*/
    search(): void;
    /** Selects a search result.*/
    select(value: T["response"]["values"][0]): void;
    readonly state: {
        values: T["response"]["values"];
        isLoading: boolean;
        moreValuesAvailable: boolean;
    } | {
        values: T["response"]["values"];
        isLoading: boolean;
        moreValuesAvailable: boolean;
    };
};
export {};
