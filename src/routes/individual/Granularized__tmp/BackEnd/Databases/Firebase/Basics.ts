import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/BackEnd/Databases/Firebase/Basics/Fundamentals';
import Firestore from '@/routes/Individual/Granularized/BackEnd/Databases/Firebase/Basics/Firestore';
import RealtimeDatabase from '@/routes/Individual/Granularized/BackEnd/Databases/Firebase/Basics/RealtimeDatabase';
import Authentication from '@/routes/Individual/Granularized/BackEnd/Databases/Firebase/Basics/Authentication';
import Storage from '@/routes/Individual/Granularized/BackEnd/Databases/Firebase/Basics/Storage';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Firestore,
    ...RealtimeDatabase,
    ...Authentication,
    ...Storage,
];

export default Basics;