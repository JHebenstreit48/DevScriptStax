import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Testing/Framework/Mocha/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Testing/Framework/Mocha/Advanced';


const Mocha: Subpage = {
  name: 'Mocha',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Mocha;