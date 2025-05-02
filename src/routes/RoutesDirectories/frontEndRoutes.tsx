import { RouteObject } from "react-router-dom";

// ========================================================
//                  Front-End Routes Start
// ========================================================

import cssRoutes from "@/routes/FrontEndRoutes/cssRoutes"
import angularRoutes from "@/routes/FrontEndRoutes/angularRoutes";
import htmlRoutes from "@/routes/FrontEndRoutes/htmlRoutes";
import javascriptRoutes from "@/routes/FrontEndRoutes/javascriptRoutes";
import markdownRoutes from "@/routes/FrontEndRoutes/markdownRoutes";
import reactRoutes from "@/routes/FrontEndRoutes/reactRoutes";



const frontEndRoutes: RouteObject[] = [

    ...cssRoutes,
    ...angularRoutes,
    ...htmlRoutes,
    ...javascriptRoutes,
    ...markdownRoutes,
    ...reactRoutes,

];

export default frontEndRoutes;