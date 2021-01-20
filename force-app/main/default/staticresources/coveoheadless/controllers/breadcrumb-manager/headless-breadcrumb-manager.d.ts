import { Engine } from '../../app/headless-engine';
import { BaseFacetValue } from '../../features/facets/facet-api/response';
import { FacetValue } from '../../features/facets/facet-set/interfaces/response';
import { CategoryFacetValue } from '../../features/facets/category-facet-set/interfaces/response';
import { NumericFacetValue } from '../../features/facets/range-facets/numeric-facet-set/interfaces/response';
import { DateFacetValue } from '../../features/facets/range-facets/date-facet-set/interfaces/response';
import { CategoryFacetSection, ConfigurationSection, DateFacetSection, FacetSection, NumericFacetSection, SearchSection } from '../../state/state-sections';
/**
 * The `BreadcrumbManager` headless controller manages a summary of the currently active facet filters.
 */
export declare type BreadcrumbManager = ReturnType<typeof buildBreadcrumbManager>;
/**
 * A scoped and simplified part of the headless state that is relevant to the `BreadcrumbManager` controller.
 */
export declare type BreadcrumbManagerState = BreadcrumbManager['state'];
export declare const buildBreadcrumbManager: (engine: Engine<ConfigurationSection & SearchSection & FacetSection & NumericFacetSection & DateFacetSection & CategoryFacetSection>) => {
    state: {
        /**
         * The list of specific facet breadcrumbs.
         */
        facetBreadcrumbs: FacetBreadcrumb[];
        /**
         * The list of category facet breadcrumbs.
         */
        categoryFacetBreadcrumbs: CategoryFacetBreadcrumb[];
        /**
         * The list of numeric facet breadcrumbs.
         */
        numericFacetBreadcrumbs: NumericFacetBreadcrumb[];
        /**
         * The list of date facet breadcrumbs.
         */
        dateFacetBreadcrumbs: DateFacetBreadcrumb[];
        /**
         * `true` if there are any available breadcrumbs (i.e., if there are any active facet values), and `false` otherwise.
         */
        hasBreadcrumbs: boolean;
    };
    /**
     * Deselects all facet values.
     */
    deselectAll: () => void;
    /**
     * Deselects a facet breadcrumb value or category facet breadcrumb.
     * @param value The facet breadcrumb value or a category facet breadcrumb to deselect.
     */
    deselectBreadcrumb(value: BreadcrumbValue<BaseFacetValue> | CategoryFacetBreadcrumb): void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
/**
 * Represents a generic breadcrumb type.
 *
 * Can either be a `FacetBreadcrumb`, `NumericFacetBreadcrumb`, `DateFacetBreadcrumb`, or `CategoryFacetBreadcrumb`.
 */
export interface Breadcrumb<T extends BaseFacetValue> {
    /**
     * The field on which the underlying facet is configured.
     */
    field: string;
    /**
     * The list of facet values currently selected.
     */
    values: BreadcrumbValue<T>[];
}
/**
 * Represents a generic breadcrumb value type.
 */
export declare type BreadcrumbValue<T extends BaseFacetValue> = {
    /**
     * The underlying facet value linked to this breadcrumb.
     */
    value: T;
    /**
     * Deselects the corresponding facet value.
     */
    deselect: () => void;
};
/**
 * Represents a breadcrumb for specific facet.
 */
export declare type FacetBreadcrumb = Breadcrumb<FacetValue>;
/**
 * Represents a breadcrumb for a numerical facet.
 */
export declare type NumericFacetBreadcrumb = Breadcrumb<NumericFacetValue>;
/**
 * Represents a breadcrumb for a date facet.
 */
export declare type DateFacetBreadcrumb = Breadcrumb<DateFacetValue>;
/**
 * Represents a breadcrumb for a category facet.
 */
export interface CategoryFacetBreadcrumb {
    /**
     * The field on which the underlying facet is configured.
     */
    field: string;
    /**
     * The complete path of the underlying category facet value.
     */
    path: CategoryFacetValue[];
    /**
     * Deselects the corresponding facet value.
     */
    deselect: () => void;
}
