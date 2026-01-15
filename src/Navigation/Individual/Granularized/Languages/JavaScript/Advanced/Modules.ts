import type { Subpage } from '@/types/navigation';

const Modules: Subpage = {
  name: 'Modules',
  subpages: [
    {
      name: 'Overview',
      path: '/javascript/advanced/modules/overview',
    },
    {
      name: 'Import/Export Syntax',
      path: '/javascript/advanced/modules/syntax',
    },
    {
      name: 'Dynamic Imports',
      path: '/javascript/advanced/modules/dynamic',
    },
    {
      name: 'Paths & Aliases',
      path: '/javascript/advanced/modules/paths',
    },
  ],
};

export default Modules;