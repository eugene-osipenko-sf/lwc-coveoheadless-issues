import { Engine } from '../../app/headless-engine';
import { SearchParameters } from '../../features/search-parameters/search-parameter-actions';
import { SearchParametersState } from '../../state/search-app-state';
export interface SearchParameterManagerProps {
    initialState: SearchParameterManagerInitialState;
}
interface SearchParameterManagerInitialState {
    parameters: SearchParameters;
}
/** The `SearchParameterManager` controller allows restoring parameters that affect the results from e.g. a url.*/
export declare type SearchParameterManager = ReturnType<typeof buildSearchParameterManager>;
/** The state relevant to the `SearchParameterManager` controller.*/
export declare type SearchParameterManagerState = SearchParameterManager['state'];
export declare function buildSearchParameterManager(engine: Engine<Partial<SearchParametersState>>, props: SearchParameterManagerProps): {
    state: {
        parameters: SearchParameters;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
