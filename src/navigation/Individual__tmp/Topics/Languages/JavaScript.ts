import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/JavaScript/Advanced';
import Testing from '@/Navigation/Individual/Granularized/Languages/JavaScript/Testing';

const JavaScript: Subpage = {
  name: 'JavaScript',
  subpages: [
    Basics,
    Advanced,
    Testing
  ]
};

export default JavaScript;