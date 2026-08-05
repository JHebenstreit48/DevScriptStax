import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Stacks/MERN/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Stacks/MERN/Advanced';

const MERN: Subpage = {
  name: 'MERN',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default MERN;