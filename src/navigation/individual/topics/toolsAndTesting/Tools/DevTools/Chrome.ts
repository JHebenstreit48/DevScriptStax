import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Tools/DevTools/Chrome/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Tools/DevTools/Chrome/Advanced';


const Chrome: Subpage = {
  name: 'Chrome',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Chrome;