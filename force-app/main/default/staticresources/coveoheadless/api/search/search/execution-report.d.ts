export interface ExecutionReport {
    duration: number;
    children: ExecutionReportSection[];
}
export interface BaseExecutionReportSection {
    name: string;
    duration: number;
    description: string;
    result?: Record<string, unknown>;
    children?: ExecutionReportSection[];
}
export declare type ExecutionReportSection = BaseExecutionReportSection & Record<string, unknown>;
