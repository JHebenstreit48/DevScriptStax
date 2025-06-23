import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MarkdownAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Custom Rendering',
      path: '/markdown/advanced/customrendering'
    }, // Using Markdown with JS libraries
    {
      name: 'Frontmatter',
      path: '/markdown/advanced/frontmatter'
    }, // For static site generators
    {
      name: 'Plugins',
      path: '/markdown/advanced/plugins'
    } // Markdown-it, remark, etc.
  ]
};

export default MarkdownAdvanced;
