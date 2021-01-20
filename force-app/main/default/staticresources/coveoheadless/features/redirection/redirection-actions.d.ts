import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { ConfigurationSection, ContextSection, PipelineSection, QuerySection, SearchHubSection } from '../../state/state-sections';
import { PlanRequest } from '../../api/search/plan/plan-request';
export declare type RedirectionState = ConfigurationSection & QuerySection & Partial<ContextSection & SearchHubSection & PipelineSection>;
/**
 * Preprocesses the query for the current headless state, and updates the redirection URL if a redirect trigger was fired in the query pipeline.
 * @param defaultRedirectionUrl (string) The default URL to which to redirect the user.
 */
export declare const checkForRedirection: import("@reduxjs/toolkit").AsyncThunk<string, {
    defaultRedirectionUrl: string;
}, AsyncThunkSearchOptions<RedirectionState>>;
export declare const buildPlanRequest: (state: RedirectionState) => PlanRequest;
