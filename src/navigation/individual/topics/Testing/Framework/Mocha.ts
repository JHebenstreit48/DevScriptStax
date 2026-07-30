import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Testing/Framework/Mocha/Basics';
import Advanced from '@/navigation/individual/modularized/Testing/Framework/Mocha/Advanced';


const Mocha: Subpage = {
  name: 'Mocha',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Mocha;