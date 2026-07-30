import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Testing/Framework/Jest/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Testing/Framework/Jest/Advanced';


const Jest: Subpage = {
  name: 'Jest',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Jest;