import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const CLIAndAdmin: Subpage = {
  name: 'CLI & Admin',
  subpages: [
    {
      name: 'psql Basics',
      path: '/databases/postgresql/tools/cli-admin/psql-basics',
    },
    {
      name: 'Roles & Permissions',
      path: '/databases/postgresql/tools/cli-admin/roles-permissions',
    },
  ],
};

export default CLIAndAdmin;