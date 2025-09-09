import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MarkdownAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Extending',
      subpages: [
        {
          name: 'Custom Rendering',
          path: '/markdown/advanced/extending/custom-rendering'
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
          path: '/markdown/advanced/best-practices/consistency'
        },
        {
          name: 'Readability',
          path: '/markdown/advanced/best-practices/readability'
        },
        {
          name: 'Version Control',
          path: '/markdown/advanced/best-practices/version-control'
        }
      ]
    }
  ]
};

export default MarkdownAdvanced;