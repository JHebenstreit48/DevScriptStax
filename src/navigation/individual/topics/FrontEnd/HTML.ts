import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/HTML/Basics';
import Intermediate from '@/navigation/individual/modularized/FrontEnd/HTML/Intermediate';
import Advanced from '@/navigation/individual/modularized/FrontEnd/HTML/Advanced';
import Images from '@/navigation/individual/modularized/FrontEnd/HTML/Images';

const HTML: Subpage = {
  name: 'HTML',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
    Images
  ]
};

export default HTML;