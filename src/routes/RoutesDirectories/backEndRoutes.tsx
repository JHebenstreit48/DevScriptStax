import { RouteObject } from "react-router-dom";
import apiRoutes from "@/routes/BackEnd/apiRoutes";

const backEndRoutes: RouteObject[] = [

    ...apiRoutes,
];

export default backEndRoutes;