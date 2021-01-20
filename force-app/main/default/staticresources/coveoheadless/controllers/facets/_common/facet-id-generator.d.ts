import { Logger } from 'pino';
import { AllFacetSections } from '../../../features/facets/generic/interfaces/generic-facet-section';
export interface FacetIdConfig {
    field: string;
    state: Partial<AllFacetSections>;
}
export declare function generateFacetId(config: FacetIdConfig, logger: Logger): string;
