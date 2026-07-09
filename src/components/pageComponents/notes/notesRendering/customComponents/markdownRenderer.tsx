import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

import CodeBlock from '@/components/pageComponents/notes/notesRendering/customComponents/codeBlock';
import LinkRenderer from '@/components/pageComponents/notes/notesRendering/customComponents/linkRenderer';
import TableWrapper from '@/components/pageComponents/notes/notesRendering/customComponents/tableWrapper';
import IconRenderer from '@/components/pageComponents/notes/notesRendering/customComponents/iconRenderer';
import { remarkIconPlugin } from '@/utils/notes/remarkIconPlugin';

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
      remarkPlugins={[remarkGfm, remarkIconPlugin]}
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