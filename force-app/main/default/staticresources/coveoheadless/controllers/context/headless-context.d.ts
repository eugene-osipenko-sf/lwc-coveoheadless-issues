import { Engine } from '../../app/headless-engine';
import { Context as ContextPayload, ContextValue } from '../../features/context/context-state';
import { ContextSection } from '../../state/state-sections';
/**
 * The `Context` controller injects custom contextual information into the search requests and usage analytics search events sent from a search interface.
 *
 * See [Sending Custom Context Information](https://docs.coveo.com/en/399/).
 */
export declare type Context = ReturnType<typeof buildContext>;
export declare type ContextState = Context['state'];
export declare const buildContext: (engine: Engine<ContextSection>) => {
    state: {
        values: Record<string, string | string[]>;
    };
    /**
     * Set the context for the query. Replace any existing context by the new one.
     *  @param ctx The context to set in the query.
     */
    set(ctx: ContextPayload): void;
    /**
     * Add, or replace if already present, a new context key and value pair.
     * @param contextKey The context key to add.
     * @param contextValue The context value to add.
     */
    add(contextKey: string, contextValue: ContextValue): void;
    /**
     * Remove a context key from the query.
     * @param key The context key to remove.
     */
    remove(key: string): void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
