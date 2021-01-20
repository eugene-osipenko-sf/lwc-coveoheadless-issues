import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, ProductRecommendationsSection } from '../../state/state-sections';
import { ArrayValue, NumberValue, Schema, SchemaValues } from '@coveo/bueno';
export declare const baseProductRecommendationsOptionsSchema: {
    skus: ArrayValue<string>;
    maxNumberOfRecommendations: NumberValue;
};
declare const optionsSchema: Schema<{
    skus: string[] | null | undefined;
    maxNumberOfRecommendations: number;
    id: string;
}>;
export declare type ProductRecommendationsListOptions = SchemaValues<typeof optionsSchema>;
export interface ProductRecommendationsListProps {
    options?: ProductRecommendationsListOptions;
}
export declare type ProductRecommendationsList = ReturnType<typeof buildBaseProductRecommendationsList>;
export declare type ProductRecommendationsListState = ProductRecommendationsList['state'];
export declare const buildBaseProductRecommendationsList: (engine: Engine<ProductRecommendationsSection & ConfigurationSection>, props?: ProductRecommendationsListProps) => {
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
