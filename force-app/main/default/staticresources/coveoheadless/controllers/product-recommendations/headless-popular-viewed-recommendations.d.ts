import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, ProductRecommendationsSection } from '../../state/state-sections';
import { Schema, SchemaValues } from '@coveo/bueno';
declare const optionsSchema: Schema<{
    maxNumberOfRecommendations: number;
}>;
export declare type PopularViewedRecommendationsListOptions = SchemaValues<typeof optionsSchema>;
export interface PopularViewedRecommendationsListProps {
    options?: PopularViewedRecommendationsListOptions;
}
export declare type PopularViewedRecommendationsList = ReturnType<typeof buildPopularViewedRecommendationsList>;
export declare type PopularViewedRecommendationsListState = PopularViewedRecommendationsList['state'];
export declare function buildPopularViewedRecommendationsList(engine: Engine<ProductRecommendationsSection & ConfigurationSection>, props?: PopularViewedRecommendationsListProps): {
    state: {
        maxNumberOfRecommendations: number;
        recommendations: import("../../api/search/search/product").Product[];
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
        isLoading: boolean;
    };
    refresh(): void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
