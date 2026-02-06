import { RouteObject } from "react-router-dom";

import Firebase from '@/routes/Individual/FullRoutes/BackEnd/Databases/Firebase';
import MongoDB from "@/routes/Individual/FullRoutes/BackEnd/Databases/MongoDB";
import PostgreSQL from "@/routes/Individual/FullRoutes/BackEnd/Databases/PostgreSQL";

const Databases: RouteObject[] = [
    ...Firebase,
    ...MongoDB,
    ...PostgreSQL
];

export default Databases;