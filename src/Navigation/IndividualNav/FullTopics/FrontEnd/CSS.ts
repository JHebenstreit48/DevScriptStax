import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Advanced';
import Tools from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools';

const CSS: Subpage = {
  name: 'CSS',
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default CSS;