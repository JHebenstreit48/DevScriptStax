import type { Subpage } from '@/types/navigation';

const BestPractices: Subpage = {
  name: 'Best Practices',
  subpages: [
    {
      name: 'Performance Optimization',
      path: '/vue/best-practices/performance',
    },
    {
      name: 'Folder Structure',
      path: '/vue/best-practices/structure',
    },
    {
      name: 'Scalability',
      path: '/vue/best-practices/scalability',
    },
  ],
};

export default BestPractices;