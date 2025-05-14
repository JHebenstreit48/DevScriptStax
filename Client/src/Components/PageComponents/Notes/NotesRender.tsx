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

// Languages
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

// Background override applied on top of theme
const darkGrayOverride = {
  ...materialLight,
  ['pre[class*="language-"]']: {
    ...materialLight['pre[class*="language-"]'],
    background: 'rgb(29, 31, 33)',
  },
  ['code[class*="language-"]']: {
    ...materialLight['code[class*="language-"]'],
    background: 'rgb(29, 31, 33)',
  },
};

const loadMarkdown = async (filePath: string): Promise<string> => {
  const response = await fetch(filePath);
  if (!response.ok) throw new Error(`Failed to fetch Markdown: ${filePath}`);
  return response.text();
};

const NotesRender: React.FC<NotesProps> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (filePath) {
      loadMarkdown(filePath)
        .then(setMarkdownContent)
        .catch((error) => console.error('Error loading Markdown:', error));
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
                    <span className="codeBlockLanguage">{language.toUpperCase()}</span>
                    <button className="copyCodeButton" onClick={() => copyToClipboard(codeString)}>
                      {copiedCode ? 'Copied!' : 'Copy Code'}
                    </button>
                  </div>
                  <SyntaxHighlighter
                    // @ts-expect-error theme typing is incorrect
                    style={darkGrayOverride}
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
              return href?.startsWith('/') ? (
                <HashLink to={href} {...props}>
                  {children}
                </HashLink>
              ) : (
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
            },
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
      <BackToTop />
    </div>
  );
};

export default NotesRender;
