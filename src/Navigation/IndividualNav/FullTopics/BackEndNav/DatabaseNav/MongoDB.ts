import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import MongoDBBasics from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/Basics';
import MongoDBIntermediate from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/Intermediate';
import MongoDBAdvanced from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/Advanced';

const MongoDB: Subpage = {
  name: 'MongoDB',
  subpages: [
    MongoDBBasics,
    MongoDBIntermediate,
    MongoDBAdvanced
  ]
};

export default MongoDB;