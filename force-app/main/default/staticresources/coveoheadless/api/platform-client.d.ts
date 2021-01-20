export declare type HttpMethods = 'POST' | 'GET' | 'DELETE' | 'PUT';
export declare type HTTPContentTypes = 'application/json' | 'text/html';
import { BaseParam } from './search/search-api-params';
import { Logger } from 'pino';
export interface BasePlatformClientOptions {
    url: string;
    method: HttpMethods;
    contentType: HTTPContentTypes;
    headers?: Record<string, string>;
}
export interface PlatformClientCallOptions<RequestParams extends BaseParam> extends BasePlatformClientOptions {
    requestParams: Omit<RequestParams, 'url' | 'organizationId' | 'accessToken'>;
    accessToken: string;
    renewAccessToken: () => Promise<string>;
    preprocessRequest: PreprocessRequestMiddleware;
    logger: Logger;
    signal?: AbortSignal;
}
export interface PlatformResponse<T> {
    body: T;
    response: Response;
}
export declare type PreprocessRequestMiddleware = (request: BasePlatformClientOptions) => BasePlatformClientOptions | Promise<BasePlatformClientOptions>;
export declare const NoopPreprocessRequestMiddleware: PreprocessRequestMiddleware;
export declare class PlatformClient {
    static call<RequestParams extends BaseParam, ResponseType>(options: PlatformClientCallOptions<RequestParams>): Promise<PlatformResponse<ResponseType>>;
}
declare type PlatformCombination = {
    env: 'dev';
    region: 'us-east-1' | 'eu-west-1' | 'eu-west-3';
} | {
    env: 'qa';
    region: 'us-east-1' | 'eu-west-1' | 'ap-southeast-2';
} | {
    env: 'hipaa';
    region: 'us-east-1';
} | {
    env: 'prod';
    region: 'us-east-1' | 'us-west-2' | 'eu-west-1';
};
declare type PlatformEnvironment = PlatformCombination['env'];
export declare function platformUrl<E extends PlatformEnvironment = 'prod'>(options?: {
    environment?: E;
    region?: Extract<PlatformCombination, {
        env: E;
    }>['region'];
}): string;
export {};
