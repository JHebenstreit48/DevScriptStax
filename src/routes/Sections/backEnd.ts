import { RouteObject } from "react-router-dom";

import APIs from "@/routes/Individual/FullRoutes/BackEnd/APIs";

import Databases from "@/routes/Individual/FullRoutes/BackEnd/Databases";


const backEnd: RouteObject[] = [
    ...APIs,
    ...Databases,

];

export default backEnd;