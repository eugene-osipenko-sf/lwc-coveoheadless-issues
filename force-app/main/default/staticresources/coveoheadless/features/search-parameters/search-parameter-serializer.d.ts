import { SearchParameters } from './search-parameter-actions';
export declare function buildSearchParameterSerializer(): {
    serialize: typeof serialize;
    deserialize: typeof deserialize;
};
declare function serialize(obj: SearchParameters): string;
declare function deserialize(fragment: string): SearchParameters;
export {};
