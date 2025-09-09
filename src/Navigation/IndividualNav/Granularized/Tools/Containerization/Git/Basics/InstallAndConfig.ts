import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const InstallAndConfig: Subpage = {
  name: 'Install/Config',
  subpages: [
    {
      name: 'Installing Git',
      path: '/tools/containerization/git/basics/install-and-config/installing',
    },
    {
      name: 'Initial Configuration',
      path: '/tools/containerization/git/basics/install-and-config/configuration',
    },
  ],
};

export default InstallAndConfig;