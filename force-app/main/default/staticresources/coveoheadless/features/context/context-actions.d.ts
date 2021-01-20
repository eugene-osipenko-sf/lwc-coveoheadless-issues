import { ContextValue } from './context-state';
/**
 * Sets the query context.
 * @param payload (Context) The new context (e.g., {age: "18-35"}).
 */
export declare const setContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: Record<string, string | string[]>], Record<string, string | string[]>, "context/set", never, never>;
/**
 * Adds a new context value.
 * @param payload ({contextKey: string; contextValue: ContextValue}) The key-value pair to add to the context (e.g., `{contextKey: "age", contextValue: "18-35"}`).
 */
export declare const addContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    contextKey: string;
    contextValue: ContextValue;
}], {
    contextKey: string;
    contextValue: string | string[];
}, "context/add", never, never>;
/**
 * Removes a context key-value pair.
 * @param key (string) The key to remove from the context (e.g., `"age"`).
 */
export declare const removeContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "context/remove", never, never>;
