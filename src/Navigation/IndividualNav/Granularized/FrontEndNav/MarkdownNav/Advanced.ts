import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MarkdownAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Extending Markdown',
      subpages: [
        {
          name: 'Custom Rendering',
          path: '/markdown/advanced/extending/customrendering'
        },
        {
          name: 'Frontmatter',
          path: '/markdown/advanced/extending/frontmatter'
        },
        {
          name: 'Plugins',
          path: '/markdown/advanced/extending/plugins'
        }
      ]
    },
    {
      name: 'Best Practices',
      subpages: [
        {
          name: 'Consistency',
          path: '/markdown/advanced/bestpractices/consistency'
        },
        {
          name: 'Readability',
          path: '/markdown/advanced/bestpractices/readability'
        },
        {
          name: 'Version Control',
          path: '/markdown/advanced/bestpractices/versioncontrol'
        }
      ]
    }
  ]
};

export default MarkdownAdvanced;