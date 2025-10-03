import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Advanced';

const HTML: Subpage = {
  name: 'HTML',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default HTML;