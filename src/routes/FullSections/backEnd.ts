import { RouteObject } from "react-router-dom";

import APIs from "@/routes/IndividualRoutes/FullRoutes/BackEndRoutes/APIs";

import Databases from "@/routes/IndividualRoutes/FullRoutes/BackEndRoutes/Databases";


const backEnd: RouteObject[] = [
    ...APIs,
    ...Databases,

];

export default backEnd;