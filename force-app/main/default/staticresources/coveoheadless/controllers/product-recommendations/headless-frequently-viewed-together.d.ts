import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, ProductRecommendationsSection } from '../../state/state-sections';
import { Schema, SchemaValues } from '@coveo/bueno';
declare const optionsSchema: Schema<{
    skus: string[] | null | undefined;
    maxNumberOfRecommendations: number;
}>;
export declare type FrequentlyViewedTogetherListOptions = SchemaValues<typeof optionsSchema>;
export interface FrequentlyViewedTogetherListProps {
    options?: FrequentlyViewedTogetherListOptions;
}
export declare type FrequentlyViewedTogetherList = ReturnType<typeof buildFrequentlyViewedTogetherList>;
export declare type FrequentlyViewedTogetherListState = FrequentlyViewedTogetherList['state'];
export declare const buildFrequentlyViewedTogetherList: (engine: Engine<ProductRecommendationsSection & ConfigurationSection>, props: FrequentlyViewedTogetherListProps) => {
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
