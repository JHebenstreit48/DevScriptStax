import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Basics/Fundamentals';
import CRUD from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Basics/CRUD';
import Mongoose from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Basics/Mongoose';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CRUD,
    Mongoose
  ]
};

export default Basics;