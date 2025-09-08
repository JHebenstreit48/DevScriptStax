import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ShellAndServer: Subpage = {
  name: 'Shell & Server',
  subpages: [
    {
      name: 'Overview',
      path: '/mongodb/tools/shell-and-server/overview',
    },
    {
      name: 'Shell & Server Commands',
      path: '/mongodb/tools/shell-and-server/commands',
    },
  ],
};

export default ShellAndServer;