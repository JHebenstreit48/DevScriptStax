import { SearchMatch, GroupedSearchResult } from "@/types/navigation/types";
import { buildSnippet } from "@/utils/navigation/search/buildSnippet";

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function contentHasWholeWord(content: string, term: string): boolean {
  const pattern = new RegExp(`(?<![a-z0-9])${escapeRegExp(term)}(?![a-z0-9])`, "i");
  return pattern.test(content);
}

export function filterResults(
  allPages: SearchMatch[],
  searchTerm: string
): GroupedSearchResult[] {
  const terms = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);

  const filtered = allPages.reduce<SearchMatch[]>((acc, item) => {
    const { name, breadcrumbs, content } = item;
    const navHaystack = [name, ...breadcrumbs].join(" ").toLowerCase();
    const contentHaystack = content ?? "";

    const isMatch = terms.every(
      (term) => navHaystack.includes(term) || contentHasWholeWord(contentHaystack, term)
    );

    if (!isMatch) return acc;

    const snippet = content ? buildSnippet(content, terms, searchTerm) : null;
    acc.push(snippet ? { ...item, snippet } : item);
    return acc;
  }, []);

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