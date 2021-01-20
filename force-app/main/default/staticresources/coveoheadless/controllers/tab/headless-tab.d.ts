import { Engine } from '../../app/headless-engine';
import { AdvancedSearchQueriesSection, ConfigurationSection } from '../../state/state-sections';
export declare type TabOptions = {
    /**
     * A constant query expression or filter that the Tab should add to any outgoing query.
     *
     * **Example:**
     *
     * `@objecttype==Message`
     */
    expression: string;
};
export declare type TabInitialState = {
    /**
     * Specifies if the tab is currently selected.
     * Note that there can be only one active tab for a given headless engine.
     */
    isActive: boolean;
};
export interface TabProps {
    /**
     * The options for the `Tab` controller.
     */
    options: TabOptions;
    /**
     * The initial state that should be applied to this `Tab` controller.
     */
    initialState?: TabInitialState;
}
/**
 * The `Tab` headless controller allows the end user to view a subset of results.
 * It is in charge of adding a constant expression to the outgoing query in order to refine the results.
 */
export declare type Tab = ReturnType<typeof buildTab>;
/**
 * A scoped and simplified part of the headless state that is relevant to the `Tab` controller.
 */
export declare type TabState = Tab['state'];
export declare function buildTab(engine: Engine<ConfigurationSection & AdvancedSearchQueriesSection>, props: TabProps): {
    /**
     * Activates the tab.
     */
    select(): void;
    state: {
        /** `true` if tab is selected; `false` otherwise. */
        isActive: boolean;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
