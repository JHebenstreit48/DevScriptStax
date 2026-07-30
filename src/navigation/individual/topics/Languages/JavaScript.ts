import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/JavaScript/Basics';
import Advanced from '@/navigation/individual/modularized/Languages/JavaScript/Advanced';
import Testing from '@/navigation/individual/modularized/Languages/JavaScript/Testing';

const JavaScript: Subpage = {
  name: 'JavaScript',
  subpages: [
    Basics,
    Advanced,
    Testing
  ]
};

export default JavaScript;