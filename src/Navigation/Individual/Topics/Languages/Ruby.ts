import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Languages/Ruby/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/Ruby/Advanced';

const Ruby: Subpage = {
  name: 'Ruby',
  subpages: [
    Basics,
    Advanced,
  ]
};

export default Ruby;