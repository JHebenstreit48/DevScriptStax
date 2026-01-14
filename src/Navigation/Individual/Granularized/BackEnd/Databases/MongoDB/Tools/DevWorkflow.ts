import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const DevWorkflow: Subpage = {
  name: 'Dev Workflow',
  subpages: [
    {
      name: 'Seeding & Local Dev',
      path: '/mongodb/tools/dev-workflow/seeding-and-local',
    },
    {
      name: 'Connection Strings & Environments',
      path: '/mongodb/tools/dev-workflow/connection-strings',
    },
  ],
};

export default DevWorkflow;