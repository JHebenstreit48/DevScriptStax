import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/Databases/MongoDB/Basics';
import Intermediate from '@/routes/individual/modularized/BackEnd/Databases/MongoDB/Intermediate';
import Tools from '@/routes/individual/modularized/BackEnd/Databases/MongoDB/Tools';


const MongoDB: RouteObject[] = [
    ...Basics,
    ...Intermediate,
    ...Tools
];

export default MongoDB;