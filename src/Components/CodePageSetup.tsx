import { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import html2pdf from 'html2pdf.js';
// import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import '@/CSS/Notes.css';
import '@/CSS/NotesWithCode.css';
import '@/CSS/PDFStyles.css';

interface CodePageSetupProps {
    filePath: string;
    markdownContentCode?: string;
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

const CodePageSetup: React.FC<CodePageSetupProps> = ({ filePath, markdownContentCode }) => {
    const [markdownContent, setMarkdownContent] = useState<string>('');
    const [copiedCode, setCopiedCode] = useState(false);
    const exportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (filePath) {
            loadMarkdown(filePath)
                .then(setMarkdownContent)
                .catch((error) => console.error('Error loading Markdown:', error));
        }
    }, [filePath]);

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
            <h2 className="card-header pdfHeading pageBreakAvoid">Notes With Code</h2>
            <div className='pdfMarkdownContent pageBreakAvoid'>
                <div className={markdownContentCode || 'markdownContentCode'}>
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            code({
                                className, children, ...props }) {
                                const language = className ? className.replace('language-', '') : '';
                                const codeString = String(children).trim();

                                return (
                                    <div className="code-block-wrapper pdfCodeBlockWrapper pageBreakAvoid">
                                        <div className="code-block-header pdfCodeBlockHeader">
                                            <span className="code-block-language">{language.toUpperCase()}</span>
                                            <button
                                                className="copy-code-button pdfCopyCodeButton"
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
                        {markdownContent}
                    </ReactMarkdown>
                </div>

            </div>

            {/* <div className="pdfDownloadButtons">
                <button onClick={downloadPDF}>Download PDF</button>
                <button onClick={downloadWord}>Download Word Document</button>
            </div> */}

        </div>
    );
};

export default CodePageSetup;
