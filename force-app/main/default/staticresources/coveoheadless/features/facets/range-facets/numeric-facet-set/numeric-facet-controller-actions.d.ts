import { NumericFacetValue } from './interfaces/response';
import { AsyncThunkSearchOptions } from '../../../../api/search/search-api-client';
import { ConfigurationSection, NumericFacetSection } from '../../../../state/state-sections';
/**
 * Toggles the numeric facet value and then executes a search with the appropriate analytics tag.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (NumericFacetValue) The target numeric facet value.
 */
export declare const executeToggleNumericFacetSelect: import("@reduxjs/toolkit").AsyncThunk<void, {
    facetId: string;
    selection: NumericFacetValue;
}, AsyncThunkSearchOptions<ConfigurationSection & NumericFacetSection>>;
