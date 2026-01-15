import type { Subpage } from '@/types/navigation';

const Aggregation: Subpage = {
  name: 'Aggregation',
  subpages: [
    {
      name: 'Overview',
      path: '/mongodb/intermediate/aggregation/overview',
    },
    {
      name: 'Pipelines',
      path: '/mongodb/intermediate/aggregation/pipelines',
    },
    {
      name: 'Operators',
      path: '/mongodb/intermediate/aggregation/operators',
    },
    {
      name: 'Optimization',
      path: '/mongodb/intermediate/aggregation/performance',
    },
  ],
};

export default Aggregation;