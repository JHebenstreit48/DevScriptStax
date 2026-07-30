import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/Vue/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/Vue/Advanced';

const Vue: Subpage = {
  name: 'Vue',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vue;