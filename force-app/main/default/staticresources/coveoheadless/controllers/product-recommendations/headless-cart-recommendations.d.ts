import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, ProductRecommendationsSection } from '../../state/state-sections';
import { Schema, SchemaValues } from '@coveo/bueno';
declare const optionsSchema: Schema<{
    skus: string[] | null | undefined;
    maxNumberOfRecommendations: number;
}>;
export declare type CartRecommendationsListOptions = SchemaValues<typeof optionsSchema>;
export interface CartRecommendationsListProps {
    options?: CartRecommendationsListOptions;
}
export declare type CartRecommendationsList = ReturnType<typeof buildCartRecommendationsList>;
export declare type CartRecommendationsListState = CartRecommendationsList['state'];
export declare const buildCartRecommendationsList: (engine: Engine<ProductRecommendationsSection & ConfigurationSection>, props: CartRecommendationsListProps) => {
    setSkus(skus: string[]): void;
    refresh(): void;
    state: {
        skus: string[];
        maxNumberOfRecommendations: number;
        recommendations: import("../../api/search/search/product").Product[];
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
        isLoading: boolean;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
