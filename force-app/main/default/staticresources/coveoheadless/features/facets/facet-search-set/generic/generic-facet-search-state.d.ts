import { CategoryFacetSearchSection, CategoryFacetSection, ConfigurationSection, FacetSearchSection, FacetSection } from '../../../../state/state-sections';
export declare type StateNeededForSpecificFacetSearch = ConfigurationSection & FacetSearchSection & FacetSection;
export declare type StateNeededForCategoryFacetSearch = ConfigurationSection & CategoryFacetSearchSection & CategoryFacetSection;
export declare type StateNeededForFacetSearch = ConfigurationSection & Partial<StateNeededForSpecificFacetSearch & StateNeededForCategoryFacetSearch>;
