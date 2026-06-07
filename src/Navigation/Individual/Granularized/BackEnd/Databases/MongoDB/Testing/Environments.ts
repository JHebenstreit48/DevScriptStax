import type { Subpage } from '@/types/navigation';

const Environments: Subpage = {
  name: 'Environments',
  subpages: [
    {
      name: 'Unit (Memory Server)',
      path: '/mongodb/testing/environments/memory-server',
    },
    {
      name: 'Integration (Testcontainers/Docker)',
      path: '/mongodb/testing/environments/integration',
    },
  ],
};

export default Environments;