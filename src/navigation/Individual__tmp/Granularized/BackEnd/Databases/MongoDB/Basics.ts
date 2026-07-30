import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Basics/Fundamentals';
import CRUD from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Basics/CRUD';
import Mongoose from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Basics/Mongoose';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CRUD,
    Mongoose
  ]
};

export default Basics;