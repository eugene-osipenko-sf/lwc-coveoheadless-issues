import { Engine } from '../../app/headless-engine';
export declare type Controller = ReturnType<typeof buildController>;
export declare function buildController<T>(engine: Engine<T>): {
    /**
     * Adds a callback that will be called on state change.
     *
     * @param listener A callback to be invoked on state change.
     * @returns An unsubscribe function to remove the listener.
     */
    subscribe(listener: () => void): import("redux").Unsubscribe;
    readonly state: {};
};
