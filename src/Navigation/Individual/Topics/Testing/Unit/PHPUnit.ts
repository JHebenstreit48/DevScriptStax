import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Testing/Unit/PHPUnit/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Testing/Unit/PHPUnit/Advanced';


const PHPUnit: Subpage = {
  name: 'PHPUnit',
  subpages: [
    Basics,
    Advanced
  ]
};

export default PHPUnit;