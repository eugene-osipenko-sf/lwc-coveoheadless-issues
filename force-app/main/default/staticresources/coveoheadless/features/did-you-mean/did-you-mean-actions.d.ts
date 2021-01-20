/**
 * Enables did-you-mean.
 */
export declare const enableDidYouMean: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"didYouMean/enable">;
/**
 * Disables did-you-mean.
 */
export declare const disableDidYouMean: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"didYouMean/disable">;
/**
 * Applies a did-you-mean correction.
 * @param correction (string) The target correction (e.g., `"corrected string"`).
 */
export declare const applyDidYouMeanCorrection: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "didYouMean/correction", never, never>;
