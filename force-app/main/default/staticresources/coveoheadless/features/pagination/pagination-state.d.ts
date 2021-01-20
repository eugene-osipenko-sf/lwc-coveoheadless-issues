export interface PaginationState {
    firstResult: number;
    numberOfResults: number;
    totalCountFiltered: number;
}
export declare function getPaginationInitialState(): PaginationState;
