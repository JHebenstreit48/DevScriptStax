import type { Subpage } from '@/types/navigation';

const GUIAndCLI: Subpage = {
  name: 'GUI & CLI',
  subpages: [
    {
      name: 'Compass',
      path: '/mongodb/tools/gui-and-cli/compass',
    },
    {
      name: 'Atlas CLI',
      path: '/mongodb/tools/gui-and-cli/atlas-cli',
    },
  ],
};

export default GUIAndCLI;