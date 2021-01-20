import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, RecommendationSection } from '../../state/state-sections';
import { Schema, SchemaValues } from '@coveo/bueno';
declare const optionsSchema: Schema<{
    id: string;
}>;
export declare type RecommendationListOptions = SchemaValues<typeof optionsSchema>;
export interface RecommendationListProps {
    options?: RecommendationListOptions;
}
/**
 * The `RecommendationList` controller retrieves information about the current recommendations by the search API, if there are any.
 */
export declare type RecommendationList = ReturnType<typeof buildRecommendationList>;
/** The state relevant to the `RecommendationList` controller.*/
export declare type RecommendationListState = RecommendationList['state'];
export declare function buildRecommendationList(engine: Engine<RecommendationSection & ConfigurationSection>, props?: RecommendationListProps): {
    /**
     * Gets new recommendations.
     */
    refresh(): void;
    state: {
        /** The recommendations based on the last executed query. */
        recommendations: import("../..").Result[];
        /** The current error for the last executed query, or `null` if none is present. */
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
        /** `true` if a search is in progress and `false` otherwise. */
        isLoading: boolean;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
