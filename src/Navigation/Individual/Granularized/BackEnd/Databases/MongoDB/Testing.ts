import type { Subpage } from '@/types/navigation';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    {
      name: 'Strategies',
      subpages: [
        { name: 'Overview', path: '/mongodb/testing/overview' },
        { name: 'CI Strategies', path: '/mongodb/testing/ci' },
      ],
    },
    {
      name: 'Environments',
      subpages: [
        { name: 'Unit (Memory Server)', path: '/mongodb/testing/memory-server' },
        { name: 'Integration (Testcontainers/Docker)', path: '/mongodb/testing/integration' },
      ],
    },
    {
      name: 'Data & Workflows',
      subpages: [
        { name: 'Fixtures & Seeding', path: '/mongodb/testing/fixtures-seeding' },
        { name: 'Load & Stress (k6/Artillery)', path: '/mongodb/testing/load' },
      ],
    },
  ],
};

export default Testing;