import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/DevTools/Chrome/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/DevTools/Chrome/Advanced';


const Chrome: Subpage = {
  name: 'Chrome',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Chrome;