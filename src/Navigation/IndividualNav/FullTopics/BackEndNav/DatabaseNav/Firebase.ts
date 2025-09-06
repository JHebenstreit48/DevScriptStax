import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Advanced';

const Firebase: Subpage = {
  name: 'Firebase',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Firebase;