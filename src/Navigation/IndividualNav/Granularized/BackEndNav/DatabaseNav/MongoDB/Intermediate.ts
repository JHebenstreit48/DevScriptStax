import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Indexes',
      subpages: [
        {
          name: 'Introduction',
          path: '/databases/mongodb/intermediate/indexes/overview'
        },
        {
          name: 'Index Types',
          path: '/databases/mongodb/intermediate/indexes/types'
        },
        {
          name: 'Management',
          path: '/databases/mongodb/intermediate/indexes/management'
        },
        {
          name: 'Performance',
          path: '/databases/mongodb/intermediate/indexes/performance'
        }
      ]
    },
    {
      name: 'Aggregation',
      subpages: [
        {
          name: 'Overview',
          path: '/databases/mongodb/intermediate/aggregation/overview'
        },
        {
          name: 'Pipelines',
          path: '/databases/mongodb/intermediate/aggregation/pipelines'
        },
        {
          name: 'Operators',
          path: '/databases/mongodb/intermediate/aggregation/operators'
        },
        {
          name: 'Optimization',
          path: '/databases/mongodb/intermediate/aggregation/performance'
        }
      ]
    }
  ]
};

export default Intermediate;