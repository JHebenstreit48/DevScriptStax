import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MongoDBAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Scalability & Replication',
      subpages: [
        {
          name: 'Replica Sets',
          path: '/databases/mongodb/replication/replica-sets'
        },
        {
          name: 'Sharding',
          path: '/databases/mongodb/replication/sharding'
        },
        {
          name: 'High Availability',
          path: '/databases/mongodb/replication/high-availability'
        },
        {
          name: 'Scaling Best Practices',
          path: '/databases/mongodb/replication/best-practices'
        }
      ]
    }
  ]
};

export default MongoDBAdvanced;