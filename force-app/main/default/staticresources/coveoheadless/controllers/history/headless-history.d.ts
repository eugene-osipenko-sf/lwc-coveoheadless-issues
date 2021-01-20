import { Engine } from '../../app/headless-engine';
/**
 * The `History` controller is in charge of allowing navigating back and forward in the search interface history.
 */
export declare type History = ReturnType<typeof buildHistory>;
/** The state relevant to the `History` controller.*/
export declare type HistoryState = History['state'];
export declare const buildHistory: (engine: Engine) => {
    state: import("../../app/undoable").StateWithHistory<import("../../features/history/history-state").HistoryState>;
    /**
     * Move backward in the interface history.
     */
    back(): Promise<void>;
    /**
     * Move forward in the interface history.
     */
    forward(): Promise<void>;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
