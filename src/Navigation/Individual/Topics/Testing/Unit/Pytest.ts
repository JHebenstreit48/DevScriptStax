import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Testing/Unit/Pytest/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Testing/Unit/Pytest/Advanced';


const Pytest: Subpage = {
  name: 'Pytest',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Pytest;