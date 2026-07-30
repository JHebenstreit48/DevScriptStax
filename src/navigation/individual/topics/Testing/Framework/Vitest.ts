import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Testing/Framework/Vitest/Basics';
import Advanced from '@/navigation/individual/modularized/Testing/Framework/Vitest/Advanced';


const Vitest: Subpage = {
  name: 'Vitest',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vitest;