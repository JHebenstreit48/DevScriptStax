import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/HTML/Basics';
import Images from '@/navigation/individual/modularized/FrontEnd/HTML/Images';
import Advanced from '@/navigation/individual/modularized/FrontEnd/HTML/Advanced';

const HTML: Subpage = {
  name: 'HTML',
  subpages: [
    Basics,
    Images,
    Advanced,
    
  ]
};

export default HTML;