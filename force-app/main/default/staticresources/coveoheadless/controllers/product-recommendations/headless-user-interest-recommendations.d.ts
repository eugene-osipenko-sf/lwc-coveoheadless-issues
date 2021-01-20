import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, ProductRecommendationsSection } from '../../state/state-sections';
import { Schema, SchemaValues } from '@coveo/bueno';
declare const optionsSchema: Schema<{
    maxNumberOfRecommendations: number;
}>;
export declare type UserInterestRecommendationsListOptions = SchemaValues<typeof optionsSchema>;
export interface UserInterestRecommendationsListProps {
    options?: UserInterestRecommendationsListOptions;
}
export declare type UserInterestRecommendationsList = ReturnType<typeof buildUserInterestRecommendationsList>;
export declare type UserInterestRecommendationsListState = UserInterestRecommendationsList['state'];
export declare function buildUserInterestRecommendationsList(engine: Engine<ProductRecommendationsSection & ConfigurationSection>, props: UserInterestRecommendationsListProps): {
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
