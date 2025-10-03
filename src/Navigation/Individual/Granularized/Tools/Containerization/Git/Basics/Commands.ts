import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Commands: Subpage = {
  name: 'Commands',
  subpages: [
    {
      name: 'Common',
      path: '/git/basics/commands/common',
    },
    {
      name: 'Status/Diff/Log',
      path: '/git/basics/commands/status-diff-log',
    },
  ],
};

export default Commands;