import type { Subpage } from '@/types/navigation';

const GUIAndCLI: Subpage = {
  name: 'GUI & CLI',
  subpages: [
    {
      name: 'Compass',
      path: '/mongodb/tools/gui-and-cli/compass',
    },
    {
      name: 'Atlas',
      path: '/mongodb/tools/gui-and-cli/atlas',
    },
  ],
};

export default GUIAndCLI;