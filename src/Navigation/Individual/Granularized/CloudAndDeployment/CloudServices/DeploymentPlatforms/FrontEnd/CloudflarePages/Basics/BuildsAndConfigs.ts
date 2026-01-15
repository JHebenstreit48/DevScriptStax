import type { Subpage } from '@/types/navigation';

const BuildsAndConfig: Subpage = {
  name: 'Builds & Config',
  subpages: [
    {
      name: 'Project Settings',
      path: '/cloudflare-pages/basics/builds-config/project-settings',
    },
    {
      name: 'Env Vars (Pages)',
      path: '/cloudflare-pages/basics/builds-config/env-vars-pages',
    },
  ],
};

export default BuildsAndConfig;