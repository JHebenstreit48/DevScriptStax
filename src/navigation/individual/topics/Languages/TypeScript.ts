import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/TypeScript/Basics';
import Intermediate from '@/navigation/individual/modularized/Languages/TypeScript/Intermediate';
import Advanced from '@/navigation/individual/modularized/Languages/TypeScript/Advanced';

const TypeScript: Subpage = {
  name: 'TypeScript',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
  ]
};

export default TypeScript;