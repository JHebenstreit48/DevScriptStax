import type { Subpage } from '@/types/navigation';

const SetupAndConfig: Subpage = {
  name: 'Setup & Configuration',
  subpages: [
    {
      name: 'Installing PostgreSQL',
      path: '/postgresql/basics/setup-and-config/installing',
    },
    {
      name: 'Basic Configuration',
      path: '/postgresql/basics/setup-and-config/basic-configuration',
    },
    {
      name: 'Starter Optimization',
      path: '/postgresql/basics/setup-and-config/starter-optimization',
    },
  ],
};

export default SetupAndConfig;