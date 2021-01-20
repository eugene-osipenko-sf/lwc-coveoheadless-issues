import { CategoryFacetValue } from './interfaces/response';
import { AsyncThunkSearchOptions } from '../../../api/search/search-api-client';
import { CategoryFacetSection, ConfigurationSection } from '../../../state/state-sections';
/**
 * Toggles the facet value and then executes a search with the appropriate analytics tag.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (CategoryFacetValue) The target facet value.
 */
export declare const executeToggleCategoryFacetSelect: import("@reduxjs/toolkit").AsyncThunk<void, {
    facetId: string;
    selection: CategoryFacetValue;
    retrieveCount: number;
}, AsyncThunkSearchOptions<CategoryFacetSection & ConfigurationSection>>;
/**
 * Deselects all values on the path to the currently selected category facet value and executes
 * a search with the appropriate analytics
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param numberOfValues (number) The number of category facet values to show after deselecting.
 */
export declare const executeDeselectAllCategoryFacetValues: import("@reduxjs/toolkit").AsyncThunk<void, {
    facetId: string;
}, AsyncThunkSearchOptions<CategoryFacetSection & ConfigurationSection>>;
