import { AnalyticsType } from '../analytics/analytics-utils';
import { Result } from '../../api/search/search/result';
/**
 * Logs a click event with an `actionCause` value of `documentOpen`.
 * @param result (Result) The result that was opened.
 */
export declare const logDocumentOpen: (result: Result) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Click;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
