import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/Angular/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/Angular/Advanced';
import Testing from '@/Navigation/Individual/Granularized/FrontEnd/Angular/Testing';

const Angular: Subpage = {
  name: 'Angular',
  subpages: [
    Basics,
    Advanced,
    Testing
  ]
};

export default Angular;