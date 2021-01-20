import { Value, NumberValue, StringValue, ArrayValue, BooleanValue } from '@coveo/bueno';
import { CategoryFacetValue } from './interfaces/response';
export declare const categoryFacetValueDefinition: {
    state: Value<"idle" | "selected">;
    numberOfResults: NumberValue;
    value: StringValue<string>;
    path: ArrayValue<import("@coveo/bueno").PrimitivesValues>;
    moreValuesAvailable: BooleanValue;
};
export declare function validateCategoryFacetValue(payload: CategoryFacetValue): void;
