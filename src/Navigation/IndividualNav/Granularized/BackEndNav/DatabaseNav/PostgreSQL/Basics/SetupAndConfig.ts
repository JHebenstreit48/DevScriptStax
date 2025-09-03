import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const SetupAndConfig: Subpage = {
  name: 'Setup & Configuration',
  subpages: [
    {
      name: 'Installing PostgreSQL',
      path: '/databases/postgresql/basics/setup/installing',
    },
    {
      name: 'Basic Configuration',
      path: '/databases/postgresql/basics/setup/basic-configuration',
    },
    {
      name: 'Starter Optimization',
      path: '/databases/postgresql/basics/setup/starter-optimization',
    },
  ],
};

export default SetupAndConfig;