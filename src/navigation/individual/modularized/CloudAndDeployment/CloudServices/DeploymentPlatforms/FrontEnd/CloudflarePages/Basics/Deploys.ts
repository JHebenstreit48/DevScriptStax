import type { Subpage } from '@/types/navigation';

const Deploys: Subpage = {
  name: 'Deploys',
  subpages: [
    {
      name: 'Previews & Branches',
      path: '/cloudflare-pages/basics/deploys/previews-branches',
    },
    {
      name: 'Rollbacks',
      path: '/cloudflare-pages/basics/deploys/rollbacks',
    },
  ],
};

export default Deploys;