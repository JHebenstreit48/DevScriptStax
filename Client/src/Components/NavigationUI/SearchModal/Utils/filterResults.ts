import { SearchMatch, GroupedSearchResult } from "@/Components/NavigationUI/SearchModal/Utils/types";

export function filterResults(
  allPages: SearchMatch[],
  searchTerm: string
): GroupedSearchResult[] {
  const terms = searchTerm.toLowerCase().split(/\s+/);

  const filtered = allPages.filter(({ name, breadcrumbs }) => {
    const haystack = [name, ...breadcrumbs].join(" ").toLowerCase();
    return terms.every(term => haystack.includes(term));
  });

  const grouped: Record<string, SearchMatch[]> = {};

  filtered.forEach((item) => {
    const group = item.section || "Other";
    if (!grouped[group]) grouped[group] = [];
    grouped[group].push(item);
  });

  return Object.entries(grouped).map(([section, matches]) => ({
    section,
    matches,
  }));
}
