import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/Ruby/Basics';
import Advanced from '@/navigation/individual/modularized/Languages/Ruby/Advanced';

const Ruby: Subpage = {
  name: 'Ruby',
  subpages: [
    Basics,
    Advanced,
  ]
};

export default Ruby;