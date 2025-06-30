import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import { darkGrayTheme } from '@/Components/PageComponents/Notes/NotesRendering/Utils/Theme';
import { ReactNode } from 'react';

// Register only the languages you need
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('shell', bash);

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
      <SyntaxHighlighter
        style={darkGrayTheme}
        language={language}
        PreTag="div"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;