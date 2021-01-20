import { Engine } from '../../../app/headless-engine';
import { AllFacetSections } from '../../../features/facets/generic/interfaces/generic-facet-section';
interface FacetIdConfig {
    facetId?: string;
    field: string;
}
export declare function determineFacetId(engine: Engine<Partial<AllFacetSections>>, config: FacetIdConfig): string;
export {};
