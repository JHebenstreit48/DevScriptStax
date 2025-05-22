import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { HashLink } from 'react-router-hash-link';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import materialLight from 'react-syntax-highlighter/dist/esm/styles/prism/material-light';
import BackToTop from '@/Components/PageComponents/Notes/BackToTopButton';
import '@/SCSS/PageStyles/Notes.scss';

import 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import 'react-syntax-highlighter/dist/esm/languages/prism/css';
import 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import 'react-syntax-highlighter/dist/esm/languages/prism/json';
import 'react-syntax-highlighter/dist/esm/languages/prism/sql';
import 'react-syntax-highlighter/dist/esm/languages/prism/graphql';
import 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import 'react-syntax-highlighter/dist/esm/languages/prism/docker';
import 'react-syntax-highlighter/dist/esm/languages/prism/nginx';
import 'react-syntax-highlighter/dist/esm/languages/prism/mongodb';
import 'react-syntax-highlighter/dist/esm/languages/prism/python';

interface NotesProps {
  filePath: string;
  markdownContent?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

console.log('🔍 API BASE:', API_BASE_URL);

const isLocal =
  API_BASE_URL.includes('localhost') || API_BASE_URL.startsWith('/');
console.log('🔍 ENV USED:', API_BASE_URL);

const loadMarkdown = async (filePath: string): Promise<string> => {
  const fullUrl = isLocal
    ? `${API_BASE_URL}/Notes/${filePath}`
    : `${API_BASE_URL}/api/Notes/${filePath}`;

  console.log('🌐 Fetching:', fullUrl);
  const response = await fetch(fullUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch Markdown content: ${filePath}`);
  }

  const text = await response.text();
  console.log(`✅ Fetched content (${text.length} chars)`);
  console.log('📄 Preview:', text.slice(0, 300));
  return text;
};

const darkGrayTheme = {
  ...materialLight,
  'pre[class*="language-"]': {
    ...materialLight['pre[class*="language-"]'],
    background: 'rgb(29, 31, 33)',
    boxShadow: 'none',
    padding: '1rem'
  },
  'code[class*="language-"]': {
    ...materialLight['code[class*="language-"]'],
    background: 'rgb(29, 31, 33)',
    color: '#fff',
    padding: '1rem'
  }
};

const NotesRender: React.FC<NotesProps> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (filePath) {
      console.log('📂 FilePath received by NotesRender:', filePath);
      loadMarkdown(filePath)
        .then(setMarkdownContent)
        .catch((error) => console.error('❌ Error loading Markdown:', error));
    }
  }, [filePath]);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="card">
      <div className="markdownContent">
        {markdownContent ? (
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children, ...props }) {
                const language = className?.replace('language-', '') || '';
                const codeString = String(children).trim();

                return (
                  <div className="codeBlockWrapper">
                    <div className="codeBlockHeader">
                      <span className="codeBlockLanguage">
                        {language.toUpperCase()}
                      </span>
                      <button
                        className="copyCodeButton"
                        onClick={() => copyToClipboard(codeString)}
                      >
                        {copiedCode ? 'Copied!' : 'Copy Code'}
                      </button>
                    </div>
                    <SyntaxHighlighter
                      // @ts-expect-error Theme typing is incorrect
                      style={darkGrayTheme}
                      language={language}
                      PreTag="div"
                      {...props}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                );
              },
              a({ href, children, ...props }) {
                if (href?.startsWith('/')) {
                  return (
                    <HashLink to={href} {...props}>
                      {children}
                    </HashLink>
                  );
                }
                return (
                  <a href={href} {...props}>
                    {children}
                  </a>
                );
              },
              table({ children, ...props }) {
                return (
                  <div className="tableWrapper">
                    <table className="notesTable" {...props}>
                      {children}
                    </table>
                  </div>
                );
              }
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        ) : (
          <p className="loadingMessage">Loading content...</p>
        )}
      </div>
      <BackToTop />
    </div>
  );
};

export default NotesRender;
