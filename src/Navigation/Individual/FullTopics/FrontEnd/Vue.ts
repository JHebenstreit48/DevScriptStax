import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/Vue/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/Vue/Advanced';

const Vue: Subpage = {
  name: 'Vue',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vue;