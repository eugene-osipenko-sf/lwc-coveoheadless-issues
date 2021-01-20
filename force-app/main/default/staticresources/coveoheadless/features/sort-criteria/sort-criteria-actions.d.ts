import { SortCriterion } from './criteria';
/**
 * Initializes the sortCriteria query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-sortCriteria).
 * @param payload (SortCriterion) The initial sort criterion.
 */
export declare const registerSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: import("./criteria").SortByRelevancy | import("./criteria").SortByQRE | import("./criteria").SortByDate | import("./criteria").SortByField | import("./criteria").SortByNoSort | SortCriterion[]], import("./criteria").SortByRelevancy | import("./criteria").SortByQRE | import("./criteria").SortByDate | import("./criteria").SortByField | import("./criteria").SortByNoSort | SortCriterion[], "sortCriteria/register", never, never>;
/**
 * Updates the sortCriteria query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-sortCriteria).
 * @param payload (SortCriterion) The sort criterion to set.
 */
export declare const updateSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: import("./criteria").SortByRelevancy | import("./criteria").SortByQRE | import("./criteria").SortByDate | import("./criteria").SortByField | import("./criteria").SortByNoSort | SortCriterion[]], import("./criteria").SortByRelevancy | import("./criteria").SortByQRE | import("./criteria").SortByDate | import("./criteria").SortByField | import("./criteria").SortByNoSort | SortCriterion[], "sortCriteria/update", never, never>;
