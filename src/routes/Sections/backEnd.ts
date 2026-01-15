import { RouteObject } from "react-router-dom";

import APIs from "@/routes/Individual/FullRoutes/BackEnd/APIs";
import Databases from "@/routes/Individual/FullRoutes/BackEnd/Databases";
import Frameworks from "@/routes/Individual/FullRoutes/BackEnd/Frameworks";

const backEnd: RouteObject[] = [
    ...APIs,
    ...Databases,
    ...Frameworks,

];

export default backEnd;