import { RouteObject } from "react-router-dom";

import NodeJS from '@/routes/Individual/Granularized/Glossary/BackEnd/Frameworks/NodeJS';
import ExpressJS from '@/routes/Individual/Granularized/Glossary/BackEnd/Frameworks/ExpressJS';

const Basics: RouteObject[] = [
    ...NodeJS,
    ...ExpressJS,
];

export default Basics;