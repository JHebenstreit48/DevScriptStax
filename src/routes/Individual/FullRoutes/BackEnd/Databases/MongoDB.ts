import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Basics";


import Tools from "@/routes/Individual/Granularized/BackEnd/Databases/MongoDB/Tools";

const MongoDB: RouteObject[] = [
    ...Basics,


    ...Tools
];

export default MongoDB;