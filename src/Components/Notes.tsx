import { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import html2pdf from 'html2pdf.js';
// import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import '@/CSS/Notes.css';
// import '@/CSS/PDFStyles.css';

interface NotesSetupProps {
    filePath: string;
    markdownContent?: string; // Optional prop for preloaded content
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

const NotesSetup: React.FC<NotesSetupProps> = ({ filePath, markdownContent }) => {
    const [markdown, setMarkdown] = useState<string>(markdownContent || '');
    const [copiedCode, setCopiedCode] = useState(false);
    const exportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (filePath && !markdownContent) {
            loadMarkdown(filePath)
                .then(setMarkdown)
                .catch((error) => console.error('Error loading Markdown:', error));
        }
    }, [filePath, markdownContent]);

    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(true); // Show feedback
        setTimeout(() => setCopiedCode(false), 2000); // Reset feedback after 2 seconds
    };

    return (
        <div
            className="card pdfCard"
            ref={exportRef}
            style={{ margin: '0 auto', width: '8.5in' }}
        >
            <h2 className="cardHeader pdfHeading pageBreakAvoid">Notes</h2>
            <div className="pdfMarkdownContent pageBreakAvoid">
                <div className="markdownContent">
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            code({ className, children, ...props }) {
                                const language = className ? className.replace('language-', '') : '';
                                const codeString = String(children).trim();

                                return (
                                    <div className="codeBlockWrapper pdfCodeBlockWrapper pageBreakAvoid">
                                        <div className="codeBlockHeader pdfCodeBlockHeader">
                                            <span className="codeBlockLanguage">{language.toUpperCase()}</span>
                                            <button
                                                className="copyCodeButton pdfCopyCodeButton"
                                                onClick={() => copyToClipboard(codeString)}
                                            >
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
                        }}
                    >
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default NotesSetup;
