import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Operations: Subpage = {
  name: 'Operations at Scale',
  subpages: [
    {
        name: 'Backups & PITR',
        path: '/databases/mongodb/advanced/operations/backup-pitr'
    },
    {
      name: 'Upgrades & FCV Management',
      path: '/databases/mongodb/advanced/operations/upgrades',
    },
    {
      name: 'Sharded Ops & Resharding',
      path: '/databases/mongodb/advanced/operations/sharding-ops',
    },
  ],
};

export default Operations;