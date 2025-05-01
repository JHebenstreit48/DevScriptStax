import { RouteObject } from "react-router-dom";

// ========================================================
//                  Front-End Routes Start
// ========================================================

import cssRoutes from "@/routes/FrontEnd/cssRoutes"
import angularRoutes from "@/routes/FrontEnd/angularRoutes";
import htmlRoutes from "@/routes/FrontEnd/htmlRoutes";
import javascriptRoutes from "@/routes/FrontEnd/javascriptRoutes";



const frontEndRoutes: RouteObject[] = [

    ...cssRoutes,
    ...angularRoutes,
    ...htmlRoutes,
    ...javascriptRoutes,

];

export default frontEndRoutes;