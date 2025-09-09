import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Commands: Subpage = {
  name: 'Commands',
  subpages: [
    {
      name: 'Common',
      path: '/tools/containerization/git/basics/commands/common',
    },
    {
      name: 'Status/Diff/Log',
      path: '/tools/containerization/git/basics/commands/status-diff-log',
    },
  ],
};

export default Commands;