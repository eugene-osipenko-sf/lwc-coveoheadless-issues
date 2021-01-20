import { SchemaDefinition, SchemaValue, Schema, SchemaValidationError, StringValue } from '@coveo/bueno';
import { SerializedError } from '@reduxjs/toolkit';
import { Engine } from '../app/headless-engine';
export declare const requiredNonEmptyString: StringValue<string>;
export declare const requiredEmptyAllowedString: StringValue<string>;
export declare const serializeSchemaValidationError: ({ message, name, stack, }: SchemaValidationError) => SerializedError;
/**
 * Validates an action payload and throws an error if invalid
 * @param payload the action payload
 * @param definition Either a Bueno SchemaDefinition or a SchemaValue
 */
export declare const validatePayloadAndThrow: <P>(payload: P, definition: SchemaDefinition<Required<P>> | SchemaValue<P>) => {
    payload: P;
};
/**
 * Validates an action payload and return an `error` alongside the payload if it's invalid
 * @param payload the action payload
 * @param definition Either a Bueno SchemaDefinition or a SchemaValue
 */
export declare const validatePayload: <P>(payload: P, definition: SchemaDefinition<Required<P>> | SchemaValue<P>) => {
    payload: P;
    error?: SerializedError | undefined;
};
export declare const validateInitialState: <T extends object>(engine: Engine<unknown>, schema: Schema<T>, obj: T | undefined, functionName: string) => Partial<T>;
export declare const validateOptions: <T extends object>(engine: Engine<unknown>, schema: Schema<T>, obj: Partial<T> | undefined, functionName: string) => Partial<Partial<T>>;
