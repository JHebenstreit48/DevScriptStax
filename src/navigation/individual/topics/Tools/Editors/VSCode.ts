import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/Editors/VSCode/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/Editors/VSCode/Advanced';

const VSCode: Subpage = {
  name: 'VS Code',
  subpages: [
    Basics,
    Advanced
  ],
};

export default VSCode;