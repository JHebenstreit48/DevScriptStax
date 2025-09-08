import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Advanced';
import Testing from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Testing';
import Tools from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Tools';

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