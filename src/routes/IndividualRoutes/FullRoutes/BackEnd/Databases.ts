import { RouteObject } from "react-router-dom";

import MongoDB from "@/routes/IndividualRoutes/FullRoutes/BackEnd/Databases/MongoDB";

const Databases: RouteObject[] = [
    ...MongoDB,
];

export default Databases;