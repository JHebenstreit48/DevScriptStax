import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const GoAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Error Handling',
      path: '/go/advanced/errorhandling'
    },
    {
      name: 'Modules',
      path: '/go/advanced/modules'
    },
    {
      name: 'Testing',
      path: '/go/advanced/testing'
    },
    {
      name: 'Tooling',
      path: '/go/advanced/tooling'
    },
    {
      name: 'Memory Management',
      path: '/go/advanced/memorymanagement'
    }
  ]
};

export default GoAdvanced;
