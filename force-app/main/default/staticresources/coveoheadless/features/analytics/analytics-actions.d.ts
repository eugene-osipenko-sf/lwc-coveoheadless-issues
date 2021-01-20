import { SearchPageEvents } from 'coveo.analytics/dist/definitions/searchPage/searchPageEvents';
import { Result } from '../../api/search/search/result';
import { AnalyticsType } from './analytics-utils';
export interface SearchEventPayload {
    /** The identifier of the search action (e.g., `interfaceLoad`). */
    evt: SearchPageEvents | string;
    /** The event metadata. */
    meta?: Record<string, unknown>;
}
export interface ClickEventPayload {
    evt: SearchPageEvents | string;
    result: Result;
}
export interface CustomEventPayload {
    /**
     * The event cause identifier of the custom action
     */
    evt: SearchPageEvents | string;
    /**
     * The event type identifier of the custom action
     */
    type: string;
    /** The event metadata. */
    meta?: Record<string, unknown>;
}
/**
 * Logs a search event.
 * @param p (SearchEventPayload) The search event payload.
 */
export declare const logSearchEvent: (p: SearchEventPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a click event.
 * @param p (ClickEventPayload) The click event payload.
 */
export declare const logClickEvent: (p: ClickEventPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Click;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a custom event.
 * @param p (CustomEventPayload) The custom event payload.
 */
export declare const logCustomEvent: (p: CustomEventPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Custom;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs an interface load event.
 */
export declare const logInterfaceLoad: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs an interface change event.
 */
export declare const logInterfaceChange: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
