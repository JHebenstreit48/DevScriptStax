import { useEffect, useState, lazy, Suspense, useCallback } from "react";
import { fetchMarkdown } from "@/Components/PageComponents/Notes/NotesRendering/Utils/fetchMarkdown";
import '@/SCSS/Page/Notes/index.scss';

const MarkdownRenderer = lazy(
  () =>
    import(
      "@/Components/PageComponents/Notes/NotesRendering/CustomComponents/MarkdownRenderer"
    )
);

interface NotesProps {
  filePath: string;
  markdownContent?: string;
}
type LoadState = "loading" | "ready" | "missing";

// header-only = just a single MD heading line
const isHeaderOnly = (t: string) => {
  const lines = t
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  return lines.length === 1 && /^#{1,6}\s+\S/.test(lines[0]);
};

const Notes = ({ filePath }: NotesProps) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [copiedCode, setCopiedCode] = useState(false);
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    if (filePath) {
      setLoadState("loading");
      setShowComingSoon(false);
      fetchMarkdown(filePath)
        .then((text) => {
          const trimmed = (text || "").trim();
          if (!trimmed) {
            setMarkdownContent("");
            setLoadState("missing");
            return;
          }
          setMarkdownContent(text);
          setLoadState("ready");
          if (isHeaderOnly(trimmed)) setShowComingSoon(true);
        })
        .catch((error) => {
          console.error("❌ Error loading Markdown:", error);
          setMarkdownContent("");
          setLoadState("missing");
        });
    } else {
      setMarkdownContent("");
      setLoadState("missing");
    }
  }, [filePath]);

  useEffect(() => {
    if (markdownContent && typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.substring(1));
        if (el)
          setTimeout(
            () => el.scrollIntoView({ block: "start", behavior: "auto" }),
            0
          );
      }
    }
  }, [markdownContent]);

  const copyToClipboard = useCallback((code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  }, []);

  return (
    <div className="card">
      <div className="markdownContent">
        {loadState === "ready" ? (
          <>
            <Suspense
              fallback={<p className="loadingMessage">Rendering Markdown...</p>}
            >
              <MarkdownRenderer
                content={markdownContent}
                copyToClipboard={copyToClipboard}
                copiedCode={copiedCode}
              />
            </Suspense>
            {showComingSoon && (
              <p className="loadingMessage" aria-live="polite">
                Notes coming soon…{" "}
                <span role="img" aria-label="under construction">
                  🚧
                </span>
              </p>
            )}
          </>
        ) : loadState === "loading" ? (
          <p className="loadingMessage">Loading content...</p>
        ) : (
          <p className="loadingMessage" aria-live="polite">
            Coming Soon…{" "}
            <span role="img" aria-label="under construction">
              🚧
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Notes;