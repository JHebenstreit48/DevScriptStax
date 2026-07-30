import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Basics/Fundamentals';
import Firestore from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Basics/Firestore';
import RealtimeDatabase from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Basics/RealtimeDatabase';
import Authentication from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Basics/Authentication';
import Storage from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Basics/Storage';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Firestore,
    RealtimeDatabase,
    Authentication,
    Storage
  ]
};

export default Basics;