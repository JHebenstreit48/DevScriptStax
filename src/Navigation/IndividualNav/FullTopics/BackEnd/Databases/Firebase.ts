import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Advanced';

const Firebase: Subpage = {
  name: 'Firebase',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Firebase;