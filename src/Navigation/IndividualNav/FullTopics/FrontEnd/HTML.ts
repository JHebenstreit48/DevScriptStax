import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/HTML/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/FrontEnd/HTML/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/HTML/Advanced';

const HTML: Subpage = {
  name: 'HTML',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default HTML;