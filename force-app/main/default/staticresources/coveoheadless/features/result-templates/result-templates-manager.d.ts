import { ResultTemplate } from './result-templates';
import { Result } from '../../api/search/search/result';
import { Engine } from '../../app/headless-engine';
import { SearchAppState } from '../../state/search-app-state';
export interface ResultTemplatesManager<Content = unknown> {
    /**
     * Registers any number of result templates in the manager.
     * @param templates (...ResultTemplate<Content>) A list of templates to register.
     */
    registerTemplates(...newTemplates: ResultTemplate<Content>[]): void;
    /**
     * Selects the highest priority template for which the given result satisfies all conditions.
     * In the case where satisfied templates have equal priority, the template that was registered first is returned.
     * @param result (Result) The result for which to select a template.
     * @returns (Content) The selected template's content, or null if no template's conditions are satisfied.
     */
    selectTemplate(result: Result): Content | null;
}
/**
 * A manager in which result templates can be registered and selected based on a list of conditions and priority.
 * @param engine (HeadlessEngine) The `HeadlessEngine` instance of your application.
 * @returns (ResultTemplatesManager<Content, State>) A new result templates manager.
 */
export declare function buildResultTemplatesManager<Content = unknown, State = SearchAppState>(engine: Engine<State>): ResultTemplatesManager<Content>;
