import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Advanced';

const Firebase: Subpage = {
  name: 'Firebase',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Firebase;