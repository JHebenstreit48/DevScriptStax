import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Testing/Framework/Vitest/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Testing/Framework/Vitest/Advanced';


const Vitest: Subpage = {
  name: 'Vitest',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vitest;