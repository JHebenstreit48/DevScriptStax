import type { Subpage } from '@/types/navigation';

const Operations: Subpage = {
  name: 'Operations at Scale',
  subpages: [
    {
        name: 'Backups & PITR',
        path: '/mongodb/advanced/operations/backup-pitr'
    },
    {
      name: 'Upgrades & FCV Management',
      path: '/mongodb/advanced/operations/upgrades',
    },
    {
      name: 'Sharded Ops & Resharding',
      path: '/mongodb/advanced/operations/sharding-ops',
    },
  ],
};

export default Operations;