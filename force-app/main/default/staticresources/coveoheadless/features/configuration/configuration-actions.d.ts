import { IRuntimeEnvironment } from 'coveo.analytics';
/**
 * Updates the global headless engine configuration.
 * @param accessToken (string) The access token to use to authenticate requests against the Coveo Cloud endpoints. Typically, this will be an API key or search token that grants the privileges to execute queries and push usage analytics data in the target Coveo Cloud organization.
 * @param organizationId (string) The unique identifier of the target Coveo Cloud organization (e.g., `mycoveocloudorganizationg8tp8wu3`)
 * @param platformUrl (string) The Plaform URL to use (e.g., `https://platform.cloud.coveo.com`).
 */
export declare const updateBasicConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    accessToken?: string | undefined;
    organizationId?: string | undefined;
    platformUrl?: string | undefined;
}], {
    accessToken?: string | undefined;
    organizationId?: string | undefined;
    platformUrl?: string | undefined;
}, "configuration/updateBasicConfiguration", never, never>;
/**
 * Updates the search configuration.
 * @param apiBaseUrl (string) The Search API base URL to use (e.g., `https://platform.cloud.coveo.com/rest/search/v2`).
 * @param pipeline (string) The name of the query pipeline to use for the query (e.g., `External Search`). If not specified, the default query pipeline will be used.
 * @param searchHub (string) The first level of origin of the request, typically the identifier of the graphical search interface from which the request originates (e.g., `ExternalSearch`).
 */
export declare const updateSearchConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    apiBaseUrl?: string | undefined;
    pipeline?: string | undefined;
    searchHub?: string | undefined;
}], {
    apiBaseUrl?: string | undefined;
    pipeline?: string | undefined;
    searchHub?: string | undefined;
}, "configuration/updateSearchConfiguration", never, never>;
/**
 * Updates the analytics configuration.
 * @param enabled (boolean) Whether to enable usage analytics tracking.
 * @param originLevel2 (string) The origin level 2 usage analytics event metadata whose value should typically be the identifier of the tab from which the usage analytics event originates (e.g., `All`).
 * @param originLevel3 (string) The origin level 3 usage analytics event metadata whose value should typically be the URL of the page that linked to the search interface that’s making the request (e.g., `https://connect.coveo.com/s/`).
 * @param apiBaseUrl (string) The Usage Analytics API base URL to use (e.g., `https://platform.cloud.coveo.com/rest/ua`).
 * @param runtimeEnvironment (IRuntimeEnvironment) The Coveo analytics runtime to use, see https://github.com/coveo/coveo.analytics.js for more info.
 */
export declare const updateAnalyticsConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    enabled?: boolean | undefined;
    originLevel2?: string | undefined;
    originLevel3?: string | undefined;
    apiBaseUrl?: string | undefined;
    runtimeEnvironment?: IRuntimeEnvironment | undefined;
}], {
    enabled?: boolean | undefined;
    originLevel2?: string | undefined;
    originLevel3?: string | undefined;
    apiBaseUrl?: string | undefined;
    runtimeEnvironment?: IRuntimeEnvironment | undefined;
}, "configuration/updateAnalyticsConfiguration", never, never>;
/**
 * Renews the accessToken specified in the global headless engine configuration.
 * @param renew (`() => Promise<string>`) A function that fetches a new access token. The function must return a Promise that resolves to a string (the new access token).
 */
export declare const renewAccessToken: import("@reduxjs/toolkit").AsyncThunk<string, () => Promise<string>, {}>;
/**
 * Disables analytics tracking.
 */
export declare const disableAnalytics: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"configuration/analytics/disable">;
/**
 * Enables analytics tracking.
 */
export declare const enableAnalytics: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"configuration/analytics/enable">;
/**
 * Sets originLevel2 for analytics tracking.
 * @param originLevel2 (string) The origin level 2 usage analytics event metadata whose value should typically be the identifier of the tab (e.g., `All`).
 */
export declare const setOriginLevel2: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    originLevel2: string;
}], {
    originLevel2: string;
}, "configuration/analytics/originlevel2", never, never>;
/**
 * Sets originLevel3 for analytics tracking.
 * @param originLevel3 (string) The origin level 3 usage analytics event metadata whose value should typically be the URL of the page that linked to the search interface (e.g., `https://connect.coveo.com/s/`).
 */
export declare const setOriginLevel3: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    originLevel3: string;
}], {
    originLevel3: string;
}, "configuration/analytics/originlevel3", never, never>;
