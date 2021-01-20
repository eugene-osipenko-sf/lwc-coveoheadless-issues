import { Engine } from '../../app/headless-engine';
import { ConfigurationSection, QuerySection, QuerySetSection, QuerySuggestionSection, SearchSection } from '../../state/state-sections';
import { SearchBoxOptions } from './headless-search-box-options';
export { SearchBoxOptions };
export interface SearchBoxProps {
    options: SearchBoxOptions;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `SearchBox` controller.
 */
export declare type SearchBoxState = SearchBox['state'];
/**
 * The `SearchBox` headless controller offers a high-level interface for designing a common search box UI controller.
 */
export declare type SearchBox = ReturnType<typeof buildSearchBox>;
export declare function buildSearchBox(engine: Engine<QuerySection & QuerySuggestionSection & ConfigurationSection & QuerySetSection & SearchSection>, props?: Partial<SearchBoxProps>): {
    /**
     * Updates the search box text value and shows the suggestions for that value.
     * @param value  The string value to update the search box with.
     */
    updateText(value: string): void;
    /**
     * Clears the search box text and the suggestions.
     */
    clear(): void;
    /**
     * Clears the suggestions.
     */
    hideSuggestions(): void;
    /**
     * Shows the suggestions for the current search box value.
     */
    showSuggestions(): void;
    /**
     * Selects a suggestion and calls `submit`.
     * @param value The string value of the suggestion to select
     */
    selectSuggestion(value: string): void;
    /**
     * Triggers a search query.
     */
    submit(): void;
    state: {
        value: string;
        suggestions: {
            highlightedValue: string;
            rawValue: string;
        }[];
        isLoading: boolean;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
