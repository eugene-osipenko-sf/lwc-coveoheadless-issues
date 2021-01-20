import { Reducer, AnyAction } from 'redux';
export declare const makeHistory: <State>(state: State) => StateWithHistory<State>;
export interface StateWithHistory<State> {
    past: State[];
    present: State;
    future: State[];
}
export declare const ActionCreators: {
    undo: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
    redo: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
};
export declare const undoable: <State, Action extends AnyAction>(reducer: Reducer<State, AnyAction>, emptyState: State) => (state: StateWithHistory<State> | undefined, action: Action) => StateWithHistory<State>;
