import type { Subpage } from '@/types/navigation';

const Configuration: Subpage = {
  name: 'Configuration',
  subpages: [
    {
      name: 'Env Variables & Secrets',
      path: '/render/basics/configuration/env-variables',
    },
    {
      name: 'Build & Start',
      path: '/render/basics/configuration/build-start',
    },
  ],
};

export default Configuration;