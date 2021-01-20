import { BooleanValue, NumberValue, Schema, StringValue, RecordValue } from '@coveo/bueno';
import { SuggestionHighlightingOptions } from '../../utils/highlight';
export interface SearchBoxOptions extends DefaultSearchBoxOptions {
    id?: string;
    highlightOptions?: SuggestionHighlightingOptions;
}
interface DefaultSearchBoxOptions {
    numberOfSuggestions?: number;
    enableQuerySyntax?: boolean;
}
export declare const defaultSearchBoxOptions: Required<DefaultSearchBoxOptions>;
export declare const searchBoxOptionDefinitions: {
    /**
     * A unique identifier for the controller.
     * By default, a unique random identifier is generated.
     */
    id: StringValue<string>;
    /**
     * The number of query suggestions to request from Coveo ML (e.g., `3`).
     *
     * Using the value `0` disables the query suggest feature.
     *
     * @default 5
     */
    numberOfSuggestions: NumberValue;
    /**
     * Whether to interpret advanced [Coveo Cloud query syntax](https://docs.coveo.com/en/1814/searching-with-coveo/search-prefixes-and-operators) in the query.
     *
     * @default false
     */
    enableQuerySyntax: BooleanValue;
    highlightOptions: RecordValue;
};
export declare const searchBoxOptionsSchema: Schema<Required<SearchBoxOptions>>;
export {};
