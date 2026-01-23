import { pascalize } from './naming';

/**
 * Matches a subtree AFTER the topic level.
 *
 * crumbs are expected like:
 *   [Tab, Topic, Group1, Group2, ..., Leaf]
 *
 * --within "PostgreSQL" matches Group1 === "PostgreSQL"
 * --within "PostgreSQL/Basics" matches Group1 === "PostgreSQL" and Group2 === "Basics"
 */
export function matchesWithin(within: string | undefined, crumbs: string[]): boolean {
  if (!within) return true;

  const want = within
    .split('/')
    .map((s) => s.trim())
    .filter(Boolean)
    .map(pascalize);

  if (want.length === 0) return true;

  // Compare against the group chain (exclude Tab, Topic, and Leaf)
  const groupChain = crumbs.slice(2, -1).map(pascalize);

  if (groupChain.length < want.length) return false;

  // Prefix match
  for (let i = 0; i < want.length; i++) {
    if (groupChain[i] !== want[i]) return false;
  }
  return true;
}