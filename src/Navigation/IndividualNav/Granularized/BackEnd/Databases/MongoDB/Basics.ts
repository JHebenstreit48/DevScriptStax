import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/BackEnd/Databases/MongoDB/Basics/Fundamentals';
import CRUD from '@/Navigation/IndividualNav/Granularized/BackEnd/Databases/MongoDB/Basics/CRUD';
import Mongoose from '@/Navigation/IndividualNav/Granularized/BackEnd/Databases/MongoDB/Basics/Mongoose';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CRUD,
    Mongoose
  ]
};

export default Basics;