import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/Angular/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/Angular/Advanced';
import Testing from '@/navigation/individual/modularized/FrontEnd/Angular/Testing';

const Angular: Subpage = {
  name: 'Angular',
  subpages: [
    Basics,
    Advanced,
    Testing
  ]
};

export default Angular;