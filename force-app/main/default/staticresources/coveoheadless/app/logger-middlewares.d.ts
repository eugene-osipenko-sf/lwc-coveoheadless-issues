import { Logger } from 'pino';
import { Middleware } from 'redux';
export declare const logActionErrorMiddleware: (logger: Logger) => Middleware;
export declare const logActionMiddleware: (logger: Logger) => Middleware;
