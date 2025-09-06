import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const SetupAndConfig: Subpage = {
  name: 'Setup & Configuration',
  subpages: [
    {
      name: 'Installing PostgreSQL',
      path: '/postgresql/basics/setup/installing',
    },
    {
      name: 'Basic Configuration',
      path: '/postgresql/basics/setup/basic-configuration',
    },
    {
      name: 'Starter Optimization',
      path: '/postgresql/basics/setup/starter-optimization',
    },
  ],
};

export default SetupAndConfig;