import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/Languages/JavaScript/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/Languages/JavaScript/Advanced';
import Testing from '@/Navigation/Individual/Granularized/Languages/JavaScript/Testing';

const JavaScript: Subpage = {
  name: 'JavaScript',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
    Testing
  ]
};

export default JavaScript;