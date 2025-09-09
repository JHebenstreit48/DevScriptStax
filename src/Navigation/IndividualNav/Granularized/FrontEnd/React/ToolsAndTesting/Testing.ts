import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ReactTesting: Subpage = {
  name: 'Testing',
  subpages: [
    {
      name: 'Overview & Tools',
      path: '/react/testing/overview'
    },
    {
      name: 'Unit & Integration Testing',
      path: '/react/testing/unit-integration'
    }
  ]
};

export default ReactTesting;