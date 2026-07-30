import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/BackEnd/Databases/Firebase/Basics/Fundamentals';
import Firestore from '@/routes/individual/modularized/BackEnd/Databases/Firebase/Basics/Firestore';
import RealtimeDatabase from '@/routes/individual/modularized/BackEnd/Databases/Firebase/Basics/RealtimeDatabase';
import Authentication from '@/routes/individual/modularized/BackEnd/Databases/Firebase/Basics/Authentication';
import Storage from '@/routes/individual/modularized/BackEnd/Databases/Firebase/Basics/Storage';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Firestore,
    ...RealtimeDatabase,
    ...Authentication,
    ...Storage,
];

export default Basics;