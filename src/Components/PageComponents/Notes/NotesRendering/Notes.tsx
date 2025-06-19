import { useEffect, useState } from 'react';
import { fetchMarkdown } from '@/Components/PageComponents/Notes/NotesRendering/Utils/fetchMarkdown';
import MarkdownRenderer from '@/Components/PageComponents/Notes/NotesRendering/CustomComponents/MarkdownRenderer';
import BackToTop from '@/Components/PageComponents/Notes/BackToTopButton';
import '@/SCSS/PageStyles/Notes.scss';

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

  // ⬇️ Second useEffect: Scroll to anchor after content loads
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

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="card">
      <div className="markdownContent">
        {markdownContent ? (
          <MarkdownRenderer
            content={markdownContent}
            copyToClipboard={copyToClipboard}
            copiedCode={copiedCode}
          />
        ) : (
          <p className="loadingMessage">Loading content...</p>
        )}
      </div>
      <BackToTop />
    </div>
  );
};

export default Notes;
