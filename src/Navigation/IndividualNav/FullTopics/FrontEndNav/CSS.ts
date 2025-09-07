import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/Advanced';
import Tools from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/Tools';

const CSS: Subpage = {
  name: 'CSS',
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default CSS;
