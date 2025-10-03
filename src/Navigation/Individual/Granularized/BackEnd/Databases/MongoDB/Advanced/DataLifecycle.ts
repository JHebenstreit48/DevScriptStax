import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

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