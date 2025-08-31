import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
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
    },
    {
      name: 'Security & Compliance',
      subpages: [
        { name: 'Authentication & Roles', path: '/databases/mongodb/advanced/security/auth' },
        { name: 'Auditing & Compliance', path: '/databases/mongodb/advanced/security/auditing' },
        {
          name: 'Field Level Encryption (CSFLE)',
          path: '/databases/mongodb/advanced/security/csfle',
        },
      ],
    },
    {
      name: 'Consistency, Durability & Transactions',
      subpages: [
        {
          name: 'Read/Write Concerns & Preferences',
          path: '/databases/mongodb/advanced/consistency/concerns',
        },
        {
          name: 'Sessions & Retryable Writes',
          path: '/databases/mongodb/advanced/consistency/sessions',
        },
        { name: 'Transactions', path: '/databases/mongodb/advanced/consistency/transactions' },
      ],
    },
    {
      name: 'Operations at Scale',
      subpages: [
        { name: 'Backups & PITR', path: '/databases/mongodb/advanced/operations/backup-pitr' },
        {
          name: 'Upgrades & FCV Management',
          path: '/databases/mongodb/advanced/operations/upgrades',
        },
        {
          name: 'Sharded Ops & Resharding',
          path: '/databases/mongodb/advanced/operations/sharding-ops',
        },
      ],
    },
    {
      name: 'Storage Engine & Internals',
      subpages: [
        { name: 'WiredTiger Tuning', path: '/databases/mongodb/advanced/storage/wiredtiger' },
        {
          name: 'Compression & Journaling',
          path: '/databases/mongodb/advanced/storage/compression-journaling',
        },
        {
          name: 'Filesystem & Hardware Notes',
          path: '/databases/mongodb/advanced/storage/filesystem',
        },
      ],
    },
    {
      name: 'Change Streams & Events',
      subpages: [
        { name: 'Change Streams', path: '/databases/mongodb/advanced/events/change-streams' },
        {
          name: 'Triggers & Outbox Pattern',
          path: '/databases/mongodb/advanced/events/triggers-outbox',
        },
      ],
    },
    {
      name: 'Data Lifecycle & Governance',
      subpages: [
        { name: 'TTL & Archival', path: '/databases/mongodb/advanced/lifecycle/ttl-archival' },
        {
          name: 'Schema Validation',
          path: '/databases/mongodb/advanced/lifecycle/schema-validation',
        },
      ],
    },
    {
      name: 'Global & Multi-Region',
      subpages: [
        { name: 'Zones & Tag-Aware Sharding', path: '/databases/mongodb/advanced/global/zones' },
        {
          name: 'DR & Cross-Region Strategy',
          path: '/databases/mongodb/advanced/global/dr-strategy',
        },
      ],
    },
    {
      name: 'Advanced Indexing & Query Planner',
      subpages: [
        {
          name: 'Partial/Wildcard/Columnstore',
          path: '/databases/mongodb/advanced/indexing/special',
        },
        { name: 'Explain() Deep Dive', path: '/databases/mongodb/advanced/indexing/explain' },
      ],
    },
    {
      name: 'Time-Series & Specialized',
      subpages: [
        {
          name: 'Time-Series Collections',
          path: '/databases/mongodb/advanced/specialized/time-series',
        },
      ],
    },
    {
      name: 'Advanced Aggregation & Search',
      subpages: [
        {
          name: 'Window & Graph Ops',
          path: '/databases/mongodb/advanced/aggregation/window-graph',
        },
        {
          name: 'Atlas Search Integration',
          path: '/databases/mongodb/advanced/aggregation/atlas-search',
        },
      ],
    },
  ],
};

export default Advanced;