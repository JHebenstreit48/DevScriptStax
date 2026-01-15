import type { Subpage } from '@/types/navigation';

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