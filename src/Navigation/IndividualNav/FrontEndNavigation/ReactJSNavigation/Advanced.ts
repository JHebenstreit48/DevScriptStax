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
        }
      ]
    }
  ]
};

export default ReactAdvancedNavigation;