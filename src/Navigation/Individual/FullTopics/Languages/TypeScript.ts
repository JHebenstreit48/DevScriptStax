import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Languages/TypeScript/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/Languages/TypeScript/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/Languages/TypeScript/Advanced';

const TypeScript: Subpage = {
  name: 'TypeScript',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
  ]
};

export default TypeScript;