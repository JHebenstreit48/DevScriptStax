export interface SearchMatch {
  name: string;
  path: string;
  filePath?: string;
  section?: string;
  breadcrumbs: string[];
  content?: string;
}

export interface GroupedSearchResult {
  section: string;
  matches: SearchMatch[];
}