import { Engine } from '../app/headless-engine';
import { MockStoreEnhanced } from 'redux-mock-store';
import { AnyAction, ThunkDispatch, ActionCreatorWithPreparedPayload } from '@reduxjs/toolkit';
import { SearchAppState } from '../state/search-app-state';
import { RecommendationAppState } from '../state/recommendation-app-state';
import { ProductRecommendationsAppState } from '../state/product-recommendations-app-state';
declare type AsyncActionCreator<ThunkArg> = ActionCreatorWithPreparedPayload<[
    string,
    ThunkArg
], undefined, string, never, {
    arg: ThunkArg;
    requestId: string;
}>;
export declare type AppState = SearchAppState | RecommendationAppState | ProductRecommendationsAppState;
export interface MockEngine<T extends AppState> extends Engine<T> {
    mockStore: MockStore;
    actions: AnyAction[];
    findAsyncAction: <ThunkArg>(action: AsyncActionCreator<ThunkArg>) => ReturnType<AsyncActionCreator<ThunkArg>> | undefined;
}
declare type MockStore = MockStoreEnhanced<AppState, DispatchExts>;
declare type DispatchExts = ThunkDispatch<AppState, void, AnyAction>;
export declare function buildMockSearchAppEngine(config?: Partial<Engine<SearchAppState>>): MockEngine<SearchAppState>;
export declare function buildMockRecommendationAppEngine(config?: Partial<Engine<RecommendationAppState>>): MockEngine<RecommendationAppState>;
export declare function buildMockProductRecommendationsAppEngine(config?: Partial<Engine<ProductRecommendationsAppState>>): MockEngine<ProductRecommendationsAppState>;
export {};
