import { RouteObject } from "react-router-dom";

import gitRoutes from "@/routes/Tools/ContainerizationRoutes/gitRoutes";

const toolsRoutes: RouteObject[] = [
    ...gitRoutes,
];

export default toolsRoutes;