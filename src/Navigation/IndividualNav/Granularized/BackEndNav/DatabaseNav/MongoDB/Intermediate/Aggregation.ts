import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Aggregation: Subpage = {
  name: 'Aggregation',
  subpages: [
    {
      name: 'Overview',
      path: '/databases/mongodb/intermediate/aggregation/overview',
    },
    {
      name: 'Pipelines',
      path: '/databases/mongodb/intermediate/aggregation/pipelines',
    },
    {
      name: 'Operators',
      path: '/databases/mongodb/intermediate/aggregation/operators',
    },
    {
      name: 'Optimization',
      path: '/databases/mongodb/intermediate/aggregation/performance',
    },
  ],
};

export default Aggregation;