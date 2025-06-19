import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ReactNode } from 'react';
import { darkGrayTheme } from '@/Components/PageComponents/Notes/NotesRendering/Utils/Theme';

interface CodeBlockProps {
  className?: string;
  children: ReactNode;
  copyToClipboard: (code: string) => void;
  copied: boolean;
}

const CodeBlock = ({ className, children, copyToClipboard, copied }: CodeBlockProps) => {
  const language = className?.replace('language-', '') || '';
  const codeString = typeof children === 'string' ? children.trim() : '';

  return (
    <div className="codeBlockWrapper">
      <div className="codeBlockHeader">
        <span className="codeBlockLanguage">{language.toUpperCase()}</span>
        <button className="copyCodeButton" onClick={() => copyToClipboard(codeString)}>
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
      <SyntaxHighlighter style={darkGrayTheme} language={language} PreTag="div">
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
