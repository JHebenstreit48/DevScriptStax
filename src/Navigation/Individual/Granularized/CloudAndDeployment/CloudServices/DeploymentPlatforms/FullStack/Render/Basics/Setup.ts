import type { Subpage } from '@/types/navigation';

const Setup: Subpage = {
  name: 'Setup',
  subpages: [
    {
      name: 'Account',
      path: '/render/basics/setup/account',
    },
    {
      name: 'First Deployment',
      path: '/render/basics/setup/first-deployment',
    },
    {
      name: 'Custom Domain',
      path: '/render/basics/setup/custom-domain',
    },
    {
      name: 'CLI',
      path: '/render/basics/setup/cli',
    },
  ],
};

export default Setup;