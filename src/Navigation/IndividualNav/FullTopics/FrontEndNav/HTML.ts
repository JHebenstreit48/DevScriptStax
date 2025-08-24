import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/HTMLNav/Advanced';

const HTML: Subpage = {
  name: 'HTML',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default HTML;