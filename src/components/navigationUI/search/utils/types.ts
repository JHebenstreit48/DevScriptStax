export interface SearchMatch {
    name: string;
    path: string;
    section?: string;
    breadcrumbs: string[];
  }
  
  export interface GroupedSearchResult {
    section: string;
    matches: SearchMatch[];
  }
  