import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ScaleAndReplicate: Subpage = {
  name: 'Scalability & Replication',
  subpages: [
    {
      name: 'Replica Sets',
      path: '/databases/mongodb/advanced/scalability-and-replication/replica-sets',
    },
    {
      name: 'Sharding',
      path: '/databases/mongodb/advanced/scalability-and-replication/sharding',
    },
    {
      name: 'High Availability',
      path: '/databases/mongodb/advanced/scalability-and-replication/high-availability',
    },
    {
      name: 'Scaling Best Practices',
      path: '/databases/mongodb/advanced/scalability-and-replication/best-practices',
    },
  ],
};

export default ScaleAndReplicate;