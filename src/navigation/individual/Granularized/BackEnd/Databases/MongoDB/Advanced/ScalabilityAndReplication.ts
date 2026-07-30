import type { Subpage } from '@/types/navigation';

const ScaleAndReplicate: Subpage = {
  name: 'Scalability & Replication',
  subpages: [
    {
      name: 'Replica Sets',
      path: '/mongodb/advanced/scalability-and-replication/replica-sets',
    },
    {
      name: 'Sharding',
      path: '/mongodb/advanced/scalability-and-replication/sharding',
    },
    {
      name: 'High Availability',
      path: '/mongodb/advanced/scalability-and-replication/high-availability',
    },
    {
      name: 'Scaling Best Practices',
      path: '/mongodb/advanced/scalability-and-replication/best-practices',
    },
  ],
};

export default ScaleAndReplicate;