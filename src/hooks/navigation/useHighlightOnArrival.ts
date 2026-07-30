import { useEffect, RefObject } from "react";
import { useSearchParams } from "react-router-dom";

const HIGHLIGHT_PARAM = "highlight";
const HIGHLIGHT_CLASS = "searchHighlight";
const MAX_ATTEMPTS = 20;
const ATTEMPT_INTERVAL = 150;

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findAndWrapFirstMatch(root: HTMLElement, terms: string[]): HTMLElement | null {
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "i");

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) =>
      pattern.test(node.textContent || "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
  });

  const textNode = walker.nextNode() as Text | null;
  if (!textNode || !textNode.textContent) return null;

  const match = pattern.exec(textNode.textContent);
  if (!match || match.index === undefined) return null;

  const range = document.createRange();
  range.setStart(textNode, match.index);
  range.setEnd(textNode, match.index + match[0].length);

  const mark = document.createElement("mark");
  mark.className = HIGHLIGHT_CLASS;
  range.surroundContents(mark);

  return mark;
}

export function useHighlightOnArrival(containerRef: RefObject<HTMLElement>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const highlightTerm = searchParams.get(HIGHLIGHT_PARAM);

  useEffect(() => {
    if (!highlightTerm || !containerRef.current) return;

    const terms = highlightTerm.split(/\s+/).filter(Boolean);
    let attempts = 0;
    let markEl: HTMLElement | null = null;
    let cancelled = false;

    const tryHighlight = () => {
      if (cancelled || !containerRef.current) return;
      markEl = findAndWrapFirstMatch(containerRef.current, terms);

      if (markEl) {
        markEl.scrollIntoView({ block: "center", behavior: "smooth" });
      } else if (attempts < MAX_ATTEMPTS) {
        attempts += 1;
        setTimeout(tryHighlight, ATTEMPT_INTERVAL);
      }
    };

    tryHighlight();

    const clearHighlight = (e: MouseEvent) => {
      if (markEl && !markEl.contains(e.target as Node)) {
        markEl.classList.remove(HIGHLIGHT_CLASS);
        document.removeEventListener("click", clearHighlight);

        const next = new URLSearchParams(searchParams);
        next.delete(HIGHLIGHT_PARAM);
        setSearchParams(next, { replace: true });
      }
    };

    document.addEventListener("click", clearHighlight);

    return () => {
      cancelled = true;
      document.removeEventListener("click", clearHighlight);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightTerm, containerRef]);
}