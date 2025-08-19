import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/VueNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/VueNav/Advanced';

const Vue: Subpage = {
  name: 'Vue',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vue;