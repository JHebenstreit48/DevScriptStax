import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Advanced';
import Testing from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Testing';
import Tools from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Tools';

const JavaScript: Subpage = {
  name: 'JavaScript',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
    Testing,
    Tools
  ]
};

export default JavaScript;