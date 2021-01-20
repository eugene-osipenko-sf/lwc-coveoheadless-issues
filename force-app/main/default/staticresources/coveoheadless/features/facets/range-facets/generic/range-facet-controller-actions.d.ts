import { AsyncThunkSearchOptions } from '../../../../api/search/search-api-client';
import { ConfigurationSection } from '../../../../state/state-sections';
import { RangeFacetSelectionPayload } from './range-facet-validate-payload';
/**
 * Executes a search with the appropriate analytics for a toggle range facet value
 * @param payload (RangeFacetSelectionPayload) Object specifying the target facet and selection.
 */
export declare const executeToggleRangeFacetSelect: import("@reduxjs/toolkit").AsyncThunk<void, RangeFacetSelectionPayload, AsyncThunkSearchOptions<ConfigurationSection>>;
