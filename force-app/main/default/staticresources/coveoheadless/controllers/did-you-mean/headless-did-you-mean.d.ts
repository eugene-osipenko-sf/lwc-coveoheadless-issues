import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, DidYouMeanSection } from '../../state/state-sections';
export declare type DidYouMean = ReturnType<typeof buildDidYouMean>;
export declare type DidYouMeanState = DidYouMean['state'];
/**
 * The DidYouMean controller is responsible for handling query corrections.
 * When a query returns no result but finds a possible query correction, the controller either suggests the correction or
 * automatically triggers a new query with the suggested term.
 */
export declare const buildDidYouMean: (engine: Engine<ConfigurationSection & DidYouMeanSection>) => {
    state: {
        /**
         * The correction that was applied to the query. If no correction was applied, will default to an empty string.
         */
        wasCorrectedTo: string;
        /**
         * Specifies if the query was automatically corrected by Headless.
         *
         * This happens when there is no result returned by the API for a particular mispelling.
         */
        wasAutomaticallyCorrected: boolean;
        /**
         * The query correction that is currently applied by the "did you mean" module.
         */
        queryCorrection: import("../../api/search/search/query-corrections").QueryCorrection;
        /**
         * Specifies if there is a query correction to apply.
         */
        hasQueryCorrection: boolean;
    };
    /**
     * Apply query correction using the query correction, if any, currently present in the state.
     */
    applyCorrection(): void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
