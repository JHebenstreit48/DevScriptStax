import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/Advanced';

const MongoDB: Subpage = {
  name: 'MongoDB',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default MongoDB;