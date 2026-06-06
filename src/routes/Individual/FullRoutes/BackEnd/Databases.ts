import { RouteObject } from "react-router-dom";

import Firebase from '@/routes/Individual/FullRoutes/BackEnd/Databases/Firebase';
import MongoDB from "@/routes/Individual/FullRoutes/BackEnd/Databases/MongoDB";
import MySQL from "@/routes/Individual/FullRoutes/BackEnd/Databases/MySQL";
import PostgreSQL from "@/routes/Individual/FullRoutes/BackEnd/Databases/PostgreSQL";

const Databases: RouteObject[] = [
    ...Firebase,
    ...MongoDB,
    ...MySQL,
    ...PostgreSQL
];

export default Databases;