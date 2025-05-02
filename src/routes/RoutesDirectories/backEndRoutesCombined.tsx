import { RouteObject } from "react-router-dom";
import apiRoutes from "@/routes/BackEndRoutes/APIRoutes/apiRoutes";
import mongoDBRoutes from "@/routes/BackEndRoutes/DatabaseRoutes/mongoDBRoutes";

const backEndRoutes: RouteObject[] = [

    ...apiRoutes,
    ...mongoDBRoutes,
];

export default backEndRoutes;