import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

import CodeBlock from '@/Components/PageComponents/Notes/NotesRendering/CustomComponents/CodeBlock';
import LinkRenderer from '@/Components/PageComponents/Notes/NotesRendering/CustomComponents/LinkRenderer';
import TableWrapper from '@/Components/PageComponents/Notes/NotesRendering/CustomComponents/TableWrapper';
import IconRenderer from '@/Components/PageComponents/Notes/NotesRendering/CustomComponents/IconRenderer';
import { remarkIconPlugin } from '@/Components/PageComponents/Notes/NotesRendering/Utils/remarkIconPlugin'; // ✅ make sure this is correct

interface RendererProps {
  content: string;
  copyToClipboard: (code: string) => void;
  copiedCode: boolean;
}

const MarkdownRenderer = ({
  content,
  copyToClipboard,
  copiedCode
}: RendererProps) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
      remarkPlugins={[remarkGfm, remarkIconPlugin]} // ✅ Include the plugin
      components={{
        code({ className, children }) {
          return (
            <CodeBlock
              className={className}
              children={children ?? ''}
              copyToClipboard={copyToClipboard}
              copied={copiedCode}
            />
          );
        },
        a: LinkRenderer,
        table: TableWrapper,
        span(props) {
          if ('data-icon' in props && props['data-icon'] === 'wrench') {
            return <IconRenderer type="wrench" />;
          }
          return <span {...props} />;
        }
      }}      
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;