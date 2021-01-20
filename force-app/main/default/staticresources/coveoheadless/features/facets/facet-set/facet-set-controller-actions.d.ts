import { FacetValue } from './interfaces/response';
import { AsyncThunkSearchOptions } from '../../../api/search/search-api-client';
import { ConfigurationSection, FacetSection } from '../../../state/state-sections';
/**
 * Toggles the facet value and then executes a search with the appropriate analytics tag.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (FacetValue) The target facet value.
 */
export declare const executeToggleFacetSelect: import("@reduxjs/toolkit").AsyncThunk<void, {
    facetId: string;
    selection: FacetValue;
}, AsyncThunkSearchOptions<FacetSection & ConfigurationSection>>;
