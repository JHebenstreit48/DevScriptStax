import { RouteObject } from "react-router-dom";

import APIs from "@/routes/IndividualRoutes/FullRoutes/BackEnd/APIs";

import Databases from "@/routes/IndividualRoutes/FullRoutes/BackEnd/Databases";


const backEnd: RouteObject[] = [
    ...APIs,
    ...Databases,

];

export default backEnd;