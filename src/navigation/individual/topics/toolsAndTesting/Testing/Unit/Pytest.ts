import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Testing/Unit/Pytest/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Testing/Unit/Pytest/Advanced';


const Pytest: Subpage = {
  name: 'Pytest',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Pytest;