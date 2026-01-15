import type { Subpage } from '@/types/navigation';

const Setup: Subpage = {
  name: 'Setup',
  subpages: [
    {
      name: 'Create Account',
      path: '/cloudflare-pages/basics/setup/create-account',
    },
    {
      name: 'Connect Repo & Deploy',
      path: '/cloudflare-pages/basics/setup/connect-repo-deploy',
    },
  ],
};

export default Setup;