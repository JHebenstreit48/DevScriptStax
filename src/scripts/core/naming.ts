import { config } from "../config";

export function pascalize(raw: string): string {
  return raw
    .replace(/['"]/g, "")
    .replace(/\(.*?\)/g, "") // drop "(...)" content
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

export function sectionFolderName(sectionCrumb: string): string {
  return config.sectionNameMap[sectionCrumb] ?? pascalize(sectionCrumb);
}

export function safeLazyVarName(parts: string[]): string {
  // Must be a valid JS identifier. Prefix to avoid starting with a number.
  const name = parts.map(pascalize).join("");
  return `P_${name || "Page"}`;
}

export function isGenericLeafName(name: string): boolean {
  return config.genericLeafNames.has(name);
}