import { useEffect, useRef, RefObject } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

const HIGHLIGHT_PARAM = "highlight";
const HIGHLIGHT_CLASS = "searchHighlight";
const OBSERVER_TIMEOUT = 8000;

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildMatchPattern(rawTerm: string, terms: string[]): RegExp {
  const phrase = escapeRegExp(rawTerm.trim());
  const alternatives = terms.map((t) => `(?<![a-z0-9])${escapeRegExp(t)}(?![a-z0-9])`);
  return new RegExp(`(${phrase}|${alternatives.join("|")})`, "i");
}

function findAndWrapFirstMatch(root: HTMLElement, rawTerm: string, terms: string[]): HTMLElement | null {
  const pattern = buildMatchPattern(rawTerm, terms);

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
  range.surroundContents(mark);

  return mark;
}

function unwrapMark(mark: HTMLElement) {
  const parent = mark.parentNode;
  if (!parent) return;

  while (mark.firstChild) {
    parent.insertBefore(mark.firstChild, mark);
  }
  parent.removeChild(mark);
  parent.normalize();
}

export function useHighlightOnArrival(containerRef: RefObject<HTMLElement>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const highlightTerm = searchParams.get(HIGHLIGHT_PARAM);
  const epochRef = useRef(0);

  useEffect(() => {
    const myEpoch = ++epochRef.current;
    const isCurrent = () => epochRef.current === myEpoch;

    if (!highlightTerm || !containerRef.current) return;

    const terms = highlightTerm.split(/\s+/).filter(Boolean);
    let markEl: HTMLElement | null = null;
    let settled = false;

    const activateHighlight = (el: HTMLElement) => {
      requestAnimationFrame(() => {
        if (!isCurrent()) return;
        requestAnimationFrame(() => {
          if (!isCurrent()) return;
          el.classList.add(HIGHLIGHT_CLASS);
        });
      });
    };

    const attemptHighlight = (): boolean => {
      if (!isCurrent() || settled || !containerRef.current || markEl) return false;

      const found = findAndWrapFirstMatch(containerRef.current, highlightTerm, terms);
      if (found) {
        markEl = found;
        settled = true;
        markEl.scrollIntoView({ block: "center", behavior: "smooth" });
        activateHighlight(markEl);
        return true;
      }
      return false;
    };

    let cleanupObserver: (() => void) | undefined;

    if (!attemptHighlight()) {
      const observer = new MutationObserver(() => {
        if (!isCurrent()) {
          observer.disconnect();
          return;
        }
        attemptHighlight();
        if (settled) observer.disconnect();
      });

      observer.observe(containerRef.current, { childList: true, subtree: true, characterData: true });

      const timeout = setTimeout(() => {
        observer.disconnect();
      }, OBSERVER_TIMEOUT);

      cleanupObserver = () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }

    const clearHighlight = (e: MouseEvent) => {
      if (!isCurrent() || !markEl || markEl.contains(e.target as Node)) return;

      const target = e.target as HTMLElement;
      if (target.closest("a")) return;

      unwrapMark(markEl);
      markEl = null;
      document.removeEventListener("click", clearHighlight);

      setSearchParams((prev) => {
        if (prev.get(HIGHLIGHT_PARAM) !== highlightTerm) return prev;
        const next = new URLSearchParams(prev);
        next.delete(HIGHLIGHT_PARAM);
        return next;
      }, { replace: true });
    };

    document.addEventListener("click", clearHighlight);

    return () => {
      settled = true;
      cleanupObserver?.();
      if (markEl) {
        unwrapMark(markEl);
        markEl = null;
      }
      document.removeEventListener("click", clearHighlight);
    };
  }, [highlightTerm, location.key, containerRef]);
}