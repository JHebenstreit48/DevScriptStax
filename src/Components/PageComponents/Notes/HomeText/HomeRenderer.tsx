import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

interface HomeRendererProps {
  content: string;
}

const HomeRenderer = ({ content }: HomeRendererProps) => {
  return (
    <div className="markdown-renderer">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default HomeRenderer;