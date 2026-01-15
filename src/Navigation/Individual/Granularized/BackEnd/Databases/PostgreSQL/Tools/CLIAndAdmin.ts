import type { Subpage } from '@/types/navigation';

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