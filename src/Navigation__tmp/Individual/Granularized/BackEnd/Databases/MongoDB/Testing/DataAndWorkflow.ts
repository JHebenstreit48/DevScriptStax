import type { Subpage } from '@/types/navigation';

const DataAndWorkflow: Subpage = {
  name: 'Data & Workflow',
  subpages: [
    {
      name: 'Fixtures & Seeding',
      path: '/mongodb/testing/data-workflows/fixtures-and-seeding',
    },
    {
      name: 'Load & Stress (k6/Artillery)',
      path: '/mongodb/testing/data-workflows/load-stress',
    },
  ],
};

export default DataAndWorkflow;