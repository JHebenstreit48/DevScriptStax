import type { Subpage } from '@/types/navigation';

const Aggregation: Subpage = {
  name: 'Aggregation',
  subpages: [
    {
      name: 'Introduction',
      path: '/mongodb/intermediate/aggregation/introduction',
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
      path: '/mongodb/intermediate/aggregation/optimization',
    },
  ],
};

export default Aggregation;