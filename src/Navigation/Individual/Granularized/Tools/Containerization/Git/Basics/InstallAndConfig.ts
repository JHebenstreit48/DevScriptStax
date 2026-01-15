import type { Subpage } from '@/types/navigation';

const InstallAndConfig: Subpage = {
  name: 'Install/Config',
  subpages: [
    {
      name: 'Installing Git',
      path: '/git/basics/install-and-config/installing',
    },
    {
      name: 'Initial Configuration',
      path: '/git/basics/install-and-config/configuration',
    },
  ],
};

export default InstallAndConfig;