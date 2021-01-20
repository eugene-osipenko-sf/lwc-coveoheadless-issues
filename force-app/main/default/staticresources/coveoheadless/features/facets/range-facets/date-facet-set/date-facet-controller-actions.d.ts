import { DateFacetValue } from './interfaces/response';
import { AsyncThunkSearchOptions } from '../../../../api/search/search-api-client';
import { ConfigurationSection, DateFacetSection } from '../../../../state/state-sections';
/**
 * Toggles the date facet value and then executes a search with the appropriate analytics tag.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (DateFacetValue) The target date facet value.
 */
export declare const executeToggleDateFacetSelect: import("@reduxjs/toolkit").AsyncThunk<void, {
    facetId: string;
    selection: DateFacetValue;
}, AsyncThunkSearchOptions<ConfigurationSection & DateFacetSection>>;
