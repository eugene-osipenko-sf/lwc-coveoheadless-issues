import { Engine } from '../../../../app/headless-engine';
import { FacetSearchOptions } from '../../../../features/facets/facet-search-set/facet-search-request-options';
import { CategoryFacetSearchResult } from '../../../../api/search/facet-search/category-facet-search/category-facet-search-response';
import { CategoryFacetSearchSection, ConfigurationSection } from '../../../../state/state-sections';
export interface CategoryFacetSearchProps {
    options: FacetSearchOptions;
}
export declare type CategoryFacetSearch = ReturnType<typeof buildCategoryFacetSearch>;
export declare function buildCategoryFacetSearch(engine: Engine<CategoryFacetSearchSection & ConfigurationSection>, props: CategoryFacetSearchProps): {
    select(value: CategoryFacetSearchResult): void;
    state: {
        values: CategoryFacetSearchResult[];
        isLoading: boolean;
        moreValuesAvailable: boolean;
    } | {
        values: CategoryFacetSearchResult[];
        isLoading: boolean;
        moreValuesAvailable: boolean;
    };
    updateText(text: string): void;
    showMoreResults(): void;
    search(): void;
};
