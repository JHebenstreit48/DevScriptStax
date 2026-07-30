const SNIPPET_RADIUS = 80;

export function buildSnippet(content: string, terms: string[], rawTerm: string): string | null {
  if (!content) return null;

  const lower = content.toLowerCase();

  const phraseIdx = lower.indexOf(rawTerm.toLowerCase());
  let matchIndex = phraseIdx;
  let matchLength = rawTerm.length;

  if (matchIndex === -1) {
    matchIndex = -1;
    matchLength = 0;

    for (const term of terms) {
      const idx = lower.indexOf(term.toLowerCase());
      if (idx !== -1 && (matchIndex === -1 || idx < matchIndex)) {
        matchIndex = idx;
        matchLength = term.length;
      }
    }
  }

  if (matchIndex === -1) return null;

  const start = Math.max(0, matchIndex - SNIPPET_RADIUS);
  const end = Math.min(content.length, matchIndex + matchLength + SNIPPET_RADIUS);

  let snippet = content.slice(start, end).trim();
  if (start > 0) snippet = `… ${snippet}`;
  if (end < content.length) snippet = `${snippet} …`;

  return snippet;
}