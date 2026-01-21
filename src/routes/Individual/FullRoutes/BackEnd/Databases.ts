import { RouteObject } from "react-router-dom";

import Firebase from '@/routes/Individual/FullRoutes/BackEnd/Databases/Firebase';
import MongoDB from "@/routes/Individual/FullRoutes/BackEnd/Databases/MongoDB";

const Databases: RouteObject[] = [
    ...Firebase,
    ...MongoDB,
];

export default Databases;