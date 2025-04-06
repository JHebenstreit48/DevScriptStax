import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { HashLink } from 'react-router-hash-link';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import materialLight from 'react-syntax-highlighter/dist/esm/styles/prism/material-light';
import BackToTop from '@/Components/Notes/BackToTopButton';

interface NotesProps {
  filePath: string;
  markdownContent?: string;
}

// Utility function to load Markdown content from a file
const loadMarkdown = async (filePath: string): Promise<string> => {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`Failed to fetch Markdown file: ${filePath}`);
  }
  return response.text();
};

// Customized Prism theme with a dark gray background
const darkGrayBackgroundTheme = {
  ...materialLight,
  'pre[class*="language-"]': {
    ...materialLight['pre[class*="language-"]'],
    background: 'rgb(29, 31, 33)',
    boxShadow: 'none',
    padding: '1rem',
  },
  'code[class*="language-"]': {
    ...materialLight['code[class*="language-"]'],
    background: 'rgb(29, 31, 33)',
    color: '#fff',
    padding: '1rem',
  },
};

const NotesRender: React.FC<NotesProps> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
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
              const language = className ? className.replace('language-', '') : '';
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
                    style={darkGrayBackgroundTheme}
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
              if (href && href.startsWith('/')) {
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
