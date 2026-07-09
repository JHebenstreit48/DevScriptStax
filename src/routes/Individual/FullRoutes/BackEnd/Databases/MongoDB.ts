import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Basics';
import Intermediate from '@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Intermediate';
import Tools from '@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Tools';


const MongoDB: RouteObject[] = [
    ...Basics,
    ...Intermediate,
    ...Tools
];

export default MongoDB;