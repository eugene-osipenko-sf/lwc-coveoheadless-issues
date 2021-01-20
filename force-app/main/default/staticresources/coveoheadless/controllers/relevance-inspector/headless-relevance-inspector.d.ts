import { Schema, SchemaValues } from '@coveo/bueno';
import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, DebugSection, SearchSection } from '../../state/state-sections';
export interface RelevanceInspectorProps {
    initialState?: RelevanceInspectorInitialState;
    options?: RelevanceInspectorOptions;
}
declare const initialStateSchema: Schema<{
    enabled: boolean;
}>;
declare const optionsSchema: Schema<{
    automaticallyLogInformation: boolean;
}>;
export declare type RelevanceInspectorInitialState = SchemaValues<typeof initialStateSchema>;
export declare type RelevanceInspectorOptions = SchemaValues<typeof optionsSchema>;
export declare type RelevanceInspectorState = RelevanceInspector['state'];
/**
 * The `RelevanceInspector` controller is in charge of allowing displaying various debug information.
 */
export declare type RelevanceInspector = ReturnType<typeof buildRelevanceInspector>;
export declare function buildRelevanceInspector(engine: Engine<DebugSection & SearchSection & ConfigurationSection>, props?: RelevanceInspectorProps): {
    state: {
        isEnabled: boolean;
        rankingInformation?: undefined;
        executionReport?: undefined;
        expressions?: undefined;
        userIdentities?: undefined;
        rankingExpressions?: undefined;
    } | {
        isEnabled: boolean;
        rankingInformation: {
            result: import("../..").Result;
            ranking: {
                documentWeights: import("../../features/debug/ranking-info-parser").ListOfWeights | null;
                termsWeight: Record<string, import("../../features/debug/ranking-info-parser").WeightsPerTerm> | null;
                totalWeight: number | null;
                qreWeights: import("../../features/debug/ranking-info-parser").ListOfQRE[];
            } | null;
        }[];
        executionReport: import("../../api/search/search/execution-report").ExecutionReport;
        expressions: {
            basicExpression: string;
            advancedExpression: string;
            constantExpression: string;
        };
        userIdentities: import("../../api/search/search/user-identity").UserIdentity[];
        rankingExpressions: import("../../api/search/search/ranking-expression").RankingExpression[];
    };
    /**
     * Enables debug.
     */
    enable(): void;
    /**
     * Disables debug.
     */
    disable(): void;
    /**
     * Logs information to the console.
     */
    logInformation(): void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
