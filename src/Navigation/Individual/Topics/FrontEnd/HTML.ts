import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Advanced';
import Images from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Images';

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