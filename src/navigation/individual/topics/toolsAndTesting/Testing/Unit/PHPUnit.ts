import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Testing/Unit/PHPUnit/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Testing/Unit/PHPUnit/Advanced';


const PHPUnit: Subpage = {
  name: 'PHPUnit',
  subpages: [
    Basics,
    Advanced
  ]
};

export default PHPUnit;