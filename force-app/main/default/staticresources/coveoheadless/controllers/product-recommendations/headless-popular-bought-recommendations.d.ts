import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, ProductRecommendationsSection } from '../../state/state-sections';
import { Schema, SchemaValues } from '@coveo/bueno';
declare const optionsSchema: Schema<{
    maxNumberOfRecommendations: number;
}>;
export declare type PopularBoughtRecommendationsListOptions = SchemaValues<typeof optionsSchema>;
export interface PopularBoughtRecommendationsListProps {
    options?: PopularBoughtRecommendationsListOptions;
}
export declare type PopularBoughtRecommendationsList = ReturnType<typeof buildPopularBoughtRecommendationsList>;
export declare type PopularBoughtRecommendationsListState = PopularBoughtRecommendationsList['state'];
export declare const buildPopularBoughtRecommendationsList: (engine: Engine<ProductRecommendationsSection & ConfigurationSection>, props?: PopularBoughtRecommendationsListProps) => {
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
