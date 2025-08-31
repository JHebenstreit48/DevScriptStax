import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    {
      name: 'Strategies',
      subpages: [
        { name: 'Overview', path: '/databases/mongodb/testing/overview' },
        { name: 'CI Strategies', path: '/databases/mongodb/testing/ci' },
      ],
    },
    {
      name: 'Environments',
      subpages: [
        { name: 'Unit (Memory Server)', path: '/databases/mongodb/testing/memory-server' },
        { name: 'Integration (Testcontainers/Docker)', path: '/databases/mongodb/testing/integration' },
      ],
    },
    {
      name: 'Data & Workflows',
      subpages: [
        { name: 'Fixtures & Seeding', path: '/databases/mongodb/testing/fixtures-seeding' },
        { name: 'Load & Stress (k6/Artillery)', path: '/databases/mongodb/testing/load' },
      ],
    },
  ],
};

export default Testing;