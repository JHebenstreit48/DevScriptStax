import { RouteObject } from "react-router-dom";

import NodeJS from '@/routes/individual/modularized/glossaryAndResources/BackEnd/Frameworks/NodeJS';
import ExpressJS from '@/routes/individual/modularized/glossaryAndResources/BackEnd/Frameworks/ExpressJS';

const Basics: RouteObject[] = [
    ...NodeJS,
    ...ExpressJS,
];

export default Basics;