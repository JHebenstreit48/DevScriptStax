import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const BestPractices: Subpage = {
  name: 'Best Practices',
  subpages: [
    {
      name: 'Code Organization',
      path: '/svelte/best-practices/code-organization',
    },
    {
      name: 'Performance Optimization',
      path: '/svelte/best-practices/performance',
    },
  ],
};

export default BestPractices;