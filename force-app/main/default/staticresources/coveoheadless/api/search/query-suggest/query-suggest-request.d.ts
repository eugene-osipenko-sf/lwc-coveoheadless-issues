import { ActionsHistoryParam, BaseParam, ContextParam, PipelineParam, QueryParam, SearchHubParam } from '../search-api-params';
export declare type QuerySuggestRequest = BaseParam & QueryParam & ContextParam & PipelineParam & SearchHubParam & ActionsHistoryParam & {
    count: number;
};
