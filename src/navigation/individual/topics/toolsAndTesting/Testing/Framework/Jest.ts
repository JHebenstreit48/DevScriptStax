import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Testing/Framework/Jest/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Testing/Framework/Jest/Advanced';


const Jest: Subpage = {
  name: 'Jest',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Jest;