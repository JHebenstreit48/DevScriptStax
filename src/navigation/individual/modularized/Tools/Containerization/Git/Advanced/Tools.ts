import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'Git Stash',
      path: '/git/advanced/tools/stash',
    },
    {
      name: 'Git Hooks',
      path: '/git/advanced/tools/hooks',
    },
    {
      name: 'Git Submodules',
      path: '/git/advanced/tools/submodules',
    },
  ],
};

export default Tools;