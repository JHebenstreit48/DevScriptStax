import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ReduxAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Performance & Patterns',
      subpages: [
        {
          name: 'Performance Optimization',
          path: '/redux/advanced/performance'
        },
        {
          name: 'Code Splitting',
          path: '/redux/advanced/codesplitting'
        },
        {
          name: 'Custom Middleware',
          path: '/redux/advanced/custommiddleware'
        }
      ]
    },
    {
      name: 'Best Practices',
      subpages: [
        {
          name: 'Folder Structure',
          path: '/redux/advanced/folderstructure'
        },
        {
          name: 'Scalability',
          path: '/redux/advanced/scalability'
        }
      ]
    }
  ]
};

export default ReduxAdvanced;