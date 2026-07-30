import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/NextJS/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/NextJS/Advanced';

const NextJS: Subpage = {
  name: 'Next.js',
  subpages: [
    Basics,
    Advanced
  ]
};

export default NextJS;