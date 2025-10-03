import { RouteObject } from "react-router-dom";

import MongoDB from "@/routes/Individual/FullRoutes/BackEnd/Databases/MongoDB";

const Databases: RouteObject[] = [
    ...MongoDB,
];

export default Databases;