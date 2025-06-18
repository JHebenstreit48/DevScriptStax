import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ReactAdvancedNavigation: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Topics',
      subpages: [
        {
          name: 'React Router',
          path: '/react/advanced/react-router'
        },
        {
          name: 'Performance Optimization',
          path: '/react/advanced/performance'
        },
        {
          name: 'Error Handling',
          path: '/react/advanced/error-handling'
        }
      ]
    },
    {
      name: 'Best Practices',
      subpages: [
        {
          name: 'Code Organization',
          path: '/react/advanced/code-organization'
        },
        {
          name: 'Strict Mode & Linting',
          path: '/react/advanced/strict-mode'
        },
        {
          name: 'Common Pitfalls',
          path: '/react/advanced/common-pitfalls'
        },
        {
          name: 'Path Aliases',
          path: '/react/advanced/path-aliases'
        }
      ]
    },
    {
      name: 'App Setup',
      subpages: [
        {
          name: 'Favicon & Tab Icon',
          path: '/react/advanced/app-setup/favicon'
        },
        {
          name: 'Public Folder Usage',
          path: '/react/advanced/app-setup/public-folder'
        }
      ]
    },
    {
      name: 'SEO & Metadata',
      subpages: [
        {
          name: 'Rendering Markdown',
          path: '/react/advanced/seo/markdown'
        },
        {
          name: 'Open Graph & Sharing',
          path: '/react/advanced/seo/open-graph'
        }
      ]
    }
  ]
};

export default ReactAdvancedNavigation;
