import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, QuerySection, QuerySetSection, QuerySuggestionSection, RedirectionSection, SearchSection } from '../../state/state-sections';
import { StandaloneSearchBoxOptions } from './headless-standalone-search-box-options';
export { StandaloneSearchBoxOptions };
export interface StandaloneSearchBoxProps {
    options: StandaloneSearchBoxOptions;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `StandaloneSearchBox` controller.
 */
export declare type StandaloneSearchBoxState = StandaloneSearchBox['state'];
/**
 * The `StandaloneSearchBox` headless controller offers a high-level interface for designing a common search box UI controller.
 * Meant to be used for a search box that will redirect instead of executing a query.
 */
export declare type StandaloneSearchBox = ReturnType<typeof buildStandaloneSearchBox>;
export declare function buildStandaloneSearchBox(engine: Engine<ConfigurationSection & RedirectionSection & QuerySection & QuerySuggestionSection & QuerySetSection & SearchSection>, props: StandaloneSearchBoxProps): {
    /**
     * Selects a suggestion and calls `submit`.
     * @param value The string value of the suggestion to select
     */
    selectSuggestion(value: string): void;
    /**
     * Triggers a redirection.
     */
    submit(): void;
    state: {
        redirectTo: string | null;
        value: string;
        suggestions: {
            highlightedValue: string;
            rawValue: string;
        }[];
        isLoading: boolean;
    };
    updateText(value: string): void;
    clear(): void;
    hideSuggestions(): void;
    showSuggestions(): void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
