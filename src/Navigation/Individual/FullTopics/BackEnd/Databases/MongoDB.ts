import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced';

const MongoDB: Subpage = {
  name: 'MongoDB',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default MongoDB;