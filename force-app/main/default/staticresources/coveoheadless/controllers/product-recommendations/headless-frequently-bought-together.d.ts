import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, ProductRecommendationsSection } from '../../state/state-sections';
import { Schema, SchemaValues } from '@coveo/bueno';
declare const optionsSchema: Schema<{
    sku: string;
    maxNumberOfRecommendations: number;
}>;
export declare type FrequentlyBoughtTogetherListOptions = SchemaValues<typeof optionsSchema>;
export interface FrequentlyBoughtTogetherListProps {
    options?: FrequentlyBoughtTogetherListOptions;
}
export declare type FrequentlyBoughtTogetherList = ReturnType<typeof buildFrequentlyBoughtTogetherList>;
export declare type FrequentlyBoughtTogetherListState = FrequentlyBoughtTogetherList['state'];
export declare const buildFrequentlyBoughtTogetherList: (engine: Engine<ProductRecommendationsSection & ConfigurationSection>, props: FrequentlyBoughtTogetherListProps) => {
    setSku(sku: string): void;
    state: {
        sku: string;
        maxNumberOfRecommendations: number;
        recommendations: import("../../api/search/search/product").Product[];
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
        isLoading: boolean;
    };
    refresh(): void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
