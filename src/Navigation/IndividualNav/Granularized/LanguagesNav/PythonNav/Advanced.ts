import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Performance',
      subpages: [
        {
          name: 'Optimization',
          path: '/python/advanced/performance/optimization'
        },
        {
          name: 'Multithreading',
          path: '/python/advanced/performance/multithreading'
        },
        {
          name: 'Memory Management',
          path: '/python/advanced/performance/memory'
        }
      ]
    }
  ]
};

export default Advanced;