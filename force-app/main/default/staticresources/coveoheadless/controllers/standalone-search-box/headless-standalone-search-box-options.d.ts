import { Schema } from '@coveo/bueno';
import { SearchBoxOptions } from '../search-box/headless-search-box-options';
export interface StandaloneSearchBoxOptions extends SearchBoxOptions {
    redirectionUrl: string;
}
export declare const standaloneSearchBoxSchema: Schema<Required<StandaloneSearchBoxOptions>>;
