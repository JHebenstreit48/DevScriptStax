import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Tools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'Jest',
      path: '/javascript/testing/tools/jest',
    },
    {
      name: 'DOM Testing with Vitest',
      path: '/javascript/testing/tools/vitest-and-dom',
    },
  ],
};

export default Tools;