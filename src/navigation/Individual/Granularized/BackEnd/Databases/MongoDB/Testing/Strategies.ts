import type { Subpage } from '@/types/navigation';

const Strategies: Subpage = {
  name: 'Strategies',
  subpages: [
    {
      name: 'Introduction',
      path: '/mongodb/testing/strategies/introduction',
    },
    {
      name: 'CI Strategies',
      path: '/mongodb/testing/strategies/ci',
    },
  ],
};

export default Strategies;