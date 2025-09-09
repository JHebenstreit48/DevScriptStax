import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/Vue/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/Vue/Advanced';

const Vue: Subpage = {
  name: 'Vue',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vue;