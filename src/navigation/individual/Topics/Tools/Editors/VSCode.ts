import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/Editors/VSCode/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/Editors/VSCode/Advanced';

const VSCode: Subpage = {
  name: 'VS Code',
  subpages: [
    Basics,
    Advanced
  ],
};

export default VSCode;