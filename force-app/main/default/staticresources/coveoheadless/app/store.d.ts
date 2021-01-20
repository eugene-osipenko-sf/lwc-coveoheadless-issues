import { ReducersMapObject, StateFromReducersMapObject, Middleware } from '@reduxjs/toolkit';
import { AnalyticsClientSendEventHook } from 'coveo.analytics';
import { SearchAPIClient } from '../api/search/search-api-client';
import { Logger } from 'pino';
import { validatePayloadAndThrow } from '../utils/validate-payload';
export interface ThunkExtraArguments {
    searchAPIClient: SearchAPIClient;
    analyticsClientMiddleware: AnalyticsClientSendEventHook;
    logger: Logger;
    validatePayload: typeof validatePayloadAndThrow;
}
interface ConfigureStoreOptions<Reducers extends ReducersMapObject> {
    reducers: Reducers;
    preloadedState?: StateFromReducersMapObject<Reducers>;
    middlewares?: Middleware[];
    thunkExtraArguments: ThunkExtraArguments;
}
export declare function configureStore<Reducers extends ReducersMapObject>({ reducers, preloadedState, middlewares, thunkExtraArguments, }: ConfigureStoreOptions<Reducers>): import("@reduxjs/toolkit").EnhancedStore<any, import("redux").AnyAction, Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>>[]>;
export declare type Store = ReturnType<typeof configureStore>;
export {};
