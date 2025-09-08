import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEnd/Database/MongoDB/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/BackEnd/Database/MongoDB/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEnd/Database/MongoDB/Advanced';

const MongoDB: Subpage = {
  name: 'MongoDB',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default MongoDB;