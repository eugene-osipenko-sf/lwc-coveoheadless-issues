import { Engine } from '../../app/headless-engine';
import { SearchSection } from '../../state/state-sections';
export declare type FacetManagerPayload<T> = {
    facetId: string;
    payload: T;
};
export declare type FacetManager = ReturnType<typeof buildFacetManager>;
export declare type FacetManagerState = FacetManager['state'];
export declare function buildFacetManager(engine: Engine<SearchSection>): {
    /** Sorts the facets to match the order in the most recent search response.
     * @param FacetManagerPayload[] An array of facet payloads to sort.
     * @returns FacetManagerPayload[].
     */
    sort<T>(facets: FacetManagerPayload<T>[]): FacetManagerPayload<T>[];
    state: {
        facetIds: string[];
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
