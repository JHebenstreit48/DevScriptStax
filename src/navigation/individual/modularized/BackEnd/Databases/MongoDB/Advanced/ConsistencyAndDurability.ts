import type { Subpage } from '@/types/navigation';

const ConsistencyAndDurability: Subpage = {
  name: 'Consistency, Durability & Transactions',
  subpages: [
    {
      name: 'Read/Write Concerns & Preferences',
      path: '/mongodb/advanced/consistency/concerns',
    },
    {
      name: 'Sessions & Retryable Writes',
      path: '/mongodb/advanced/consistency/sessions',
    },
    {
      name: 'Transactions',
      path: '/mongodb/advanced/consistency/transactions',
    },
  ],
};

export default ConsistencyAndDurability;