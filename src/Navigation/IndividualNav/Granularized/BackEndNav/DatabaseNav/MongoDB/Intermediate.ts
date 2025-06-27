import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MongoDBIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Indexes',
      subpages: [
        {
          name: 'Introduction',
          path: '/databases/mongodb/indexes/overview'
        },
        {
          name: 'Index Types',
          path: '/databases/mongodb/indexes/types'
        },
        {
          name: 'Management',
          path: '/databases/mongodb/indexes/management'
        },
        {
          name: 'Performance',
          path: '/databases/mongodb/indexes/performance'
        }
      ]
    },
    {
      name: 'Aggregation',
      subpages: [
        {
          name: 'Overview',
          path: '/databases/mongodb/aggregation/overview'
        },
        {
          name: 'Pipelines',
          path: '/databases/mongodb/aggregation/pipelines'
        },
        {
          name: 'Operators',
          path: '/databases/mongodb/aggregation/operators'
        },
        {
          name: 'Optimization',
          path: '/databases/mongodb/aggregation/performance'
        }
      ]
    }
  ]
};

export default MongoDBIntermediate;