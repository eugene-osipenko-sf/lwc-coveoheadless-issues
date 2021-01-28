export declare type HttpMethods = 'POST' | 'GET' | 'DELETE' | 'PUT';
export declare type HTTPContentTypes = 'application/json' | 'text/html';
import { Logger } from 'pino';
export interface PlatformClientCallOptions {
    url: string;
    method: HttpMethods;
    contentType: HTTPContentTypes;
    headers?: Record<string, string>;
    requestParams: unknown;
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
export declare type PreprocessRequestMiddleware = (request: PlatformClientCallOptions) => PlatformClientCallOptions | Promise<PlatformClientCallOptions>;
export declare const NoopPreprocessRequestMiddleware: PreprocessRequestMiddleware;
export declare class PlatformClient {
    static call<ResponseType>(options: PlatformClientCallOptions): Promise<PlatformResponse<ResponseType>>;
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
