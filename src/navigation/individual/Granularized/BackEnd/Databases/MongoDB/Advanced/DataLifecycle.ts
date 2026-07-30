import type { Subpage } from '@/types/navigation';

const DataLifecycle: Subpage = {
  name: 'Data Lifecycle & Governance',
  subpages: [
    {
      name: 'TTL & Archival',
      path: '/mongodb/advanced/lifecycle/ttl-archival',
    },
    {
      name: 'Schema Validation',
      path: '/mongodb/advanced/lifecycle/schema-validation',
    },
  ],
};

export default DataLifecycle;