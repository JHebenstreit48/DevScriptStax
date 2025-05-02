import { RouteObject } from "react-router-dom";

import gitRoutes from "@/routes/Tools/gitRoutes";

const toolsRoutes: RouteObject[] = [
    ...gitRoutes,
];

export default toolsRoutes;