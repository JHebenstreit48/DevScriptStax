import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ConsistencyAndDurability: Subpage = {
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
    {
      name: 'Transactions',
      path: '/databases/mongodb/advanced/consistency/transactions',
    },
  ],
};

export default ConsistencyAndDurability;