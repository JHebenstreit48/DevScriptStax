import { useEffect, useState, lazy, Suspense, useCallback } from 'react';
import { fetchMarkdown } from '@/Components/PageComponents/Notes/NotesRendering/Utils/fetchMarkdown';
import BackToTop from '@/Components/PageComponents/Notes/BackToTopButton';
import '@/SCSS/PageStyles/Notes.scss';

// ✅ Lazy-load the MarkdownRenderer component
const MarkdownRenderer = lazy(
  () => import('@/Components/PageComponents/Notes/NotesRendering/CustomComponents/MarkdownRenderer')
);

interface NotesProps {
  filePath: string;
  markdownContent?: string;
}

const Notes = ({ filePath }: NotesProps) => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (filePath) {
      fetchMarkdown(filePath)
        .then(setMarkdownContent)
        .catch((error) => console.error('❌ Error loading Markdown:', error));
    }
  }, [filePath]);

  useEffect(() => {
    if (markdownContent && typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ block: 'start', behavior: 'auto' });
          }, 0);
        }
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
        {markdownContent ? (
          <Suspense fallback={<p className="loadingMessage">Rendering Markdown...</p>}>
            <MarkdownRenderer
              content={markdownContent}
              copyToClipboard={copyToClipboard}
              copiedCode={copiedCode}
            />
          </Suspense>
        ) : (
          <p className="loadingMessage">Loading content...</p>
        )}
      </div>
      <BackToTop />
    </div>
  );
};

export default Notes;