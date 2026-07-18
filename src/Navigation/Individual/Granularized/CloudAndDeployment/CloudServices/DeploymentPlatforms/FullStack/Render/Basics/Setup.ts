import type { Subpage } from '@/types/navigation';

const Setup: Subpage = {
  name: 'Setup',
  subpages: [
    {
      name: 'Account & First Deployment',
      path: '/render/basics/setup/account-and-first-deployment',
    },
    {
      name: 'Custom Domain',
      path: '/render/basics/setup/custom-domains',
    },
    {
      name: 'CLI',
      path: '/render/basics/setup/cli',
    },
  ],
};

export default Setup;