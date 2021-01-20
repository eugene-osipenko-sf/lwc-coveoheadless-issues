import { NumberValue, BooleanValue, RecordValue } from '@coveo/bueno';
import { RangeFacetValue } from './interfaces/range-facet';
export declare const numericFacetValueDefinition: {
    state: import("@coveo/bueno").StringValue<string>;
    start: NumberValue;
    end: NumberValue;
    endInclusive: BooleanValue;
    numberOfResults: NumberValue;
};
export declare const dateFacetValueDefinition: {
    start: import("@coveo/bueno").StringValue<string>;
    end: import("@coveo/bueno").StringValue<string>;
    endInclusive: BooleanValue;
    state: import("@coveo/bueno").StringValue<string>;
    numberOfResults: NumberValue;
};
export declare const rangeFacetSelectionPayloadDefinition: (selection: RangeFacetValue) => {
    facetId: import("@coveo/bueno").StringValue<string>;
    selection: RecordValue;
};
export interface RangeFacetSelectionPayload {
    facetId: string;
    selection: RangeFacetValue;
}
