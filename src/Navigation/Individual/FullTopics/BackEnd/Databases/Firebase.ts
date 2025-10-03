import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Advanced';

const Firebase: Subpage = {
  name: 'Firebase',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Firebase;