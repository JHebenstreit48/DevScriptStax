import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Commands: Subpage = {
  name: 'Commands',
  subpages: [
    {
      name: 'Common',
      path: '/tools/containerization/git/basics/commands',
    },
    {
      name: 'Status/Diff/Log',
      path: '/tools/containerization/git/basics/statusdifflog',
    },
  ],
};

export default Commands;