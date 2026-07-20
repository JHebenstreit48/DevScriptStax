import { SearchMatch, GroupedSearchResult } from "@/types/navigation/types";

export function filterResults(
  allPages: SearchMatch[],
  searchTerm: string
): GroupedSearchResult[] {
  const terms = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);

  const filtered = allPages.filter(({ name, breadcrumbs, content }) => {
    const navHaystack = [name, ...breadcrumbs].join(" ").toLowerCase();
    const contentHaystack = (content ?? "").toLowerCase();

    return terms.every(
      (term) => navHaystack.includes(term) || contentHaystack.includes(term)
    );
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