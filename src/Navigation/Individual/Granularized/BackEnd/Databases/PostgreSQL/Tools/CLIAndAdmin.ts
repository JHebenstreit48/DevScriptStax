import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const CLIAndAdmin: Subpage = {
  name: 'CLI & Admin',
  subpages: [
    {
      name: 'psql Basics',
      path: '/postgresql/tools/cli-admin/psql-basics',
    },
    {
      name: 'Roles & Permissions',
      path: '/postgresql/tools/cli-admin/roles-permissions',
    },
  ],
};

export default CLIAndAdmin;