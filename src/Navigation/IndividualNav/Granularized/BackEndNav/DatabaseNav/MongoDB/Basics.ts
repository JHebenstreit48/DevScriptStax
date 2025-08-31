import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/Basics/Fundamentals';
import CRUD from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/Basics/CRUD';
import Mongoose from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/MongoDB/Basics/Mongoose';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CRUD,
    Mongoose
  ]
};

export default Basics;