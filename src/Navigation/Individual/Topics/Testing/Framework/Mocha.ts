import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Testing/Framework/Mocha/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Testing/Framework/Mocha/Advanced';


const Mocha: Subpage = {
  name: 'Mocha',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Mocha;