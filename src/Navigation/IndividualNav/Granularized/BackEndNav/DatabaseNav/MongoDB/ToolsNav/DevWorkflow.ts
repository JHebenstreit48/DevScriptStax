import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const DevWorkflow: Subpage = {
  name: 'Dev Workflow',
  subpages: [
    {
      name: 'Seeding & Local Dev',
      path: '/databases/mongodb/tools/dev-workflow/seeding-and-local',
    },
    {
      name: 'Connection Strings & Environments',
      path: '/databases/mongodb/tools/dev-workflow/connection-strings',
    },
  ],
};

export default DevWorkflow;