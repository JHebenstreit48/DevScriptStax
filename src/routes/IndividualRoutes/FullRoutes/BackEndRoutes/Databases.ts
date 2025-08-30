import { RouteObject } from "react-router-dom";

import MongoDB from "@/routes/IndividualRoutes/FullRoutes/BackEndRoutes/DatabasesRoutes/MongoDB";

const Databases: RouteObject[] = [
    ...MongoDB,
];

export default Databases;