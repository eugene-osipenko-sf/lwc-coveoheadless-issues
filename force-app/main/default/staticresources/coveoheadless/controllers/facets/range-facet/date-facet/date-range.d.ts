import { DateRangeRequest } from '../../../../features/facets/range-facets/date-facet-set/interfaces/request';
declare type DateType = string | number | Date;
declare type DateOptions = {
    useLocalTime?: boolean;
    dateFormat?: string;
};
declare type DateRangeOptions = Partial<Omit<DateRangeRequest, 'start' | 'end'>> & DateOptions & {
    start: DateType;
    end: DateType;
};
export declare function isSearchApiDate(date: string): boolean;
/** Creates a `DateRangeRequest`.
 * @param config The options with which to create a `DateRangeRequest`.
 * @returns A new `DateRangeRequest`.
 */
export declare function buildDateRange(config: DateRangeOptions): DateRangeRequest;
export {};
