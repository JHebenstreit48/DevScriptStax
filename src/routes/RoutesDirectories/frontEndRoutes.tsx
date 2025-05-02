import { RouteObject } from "react-router-dom";

import angularRoutes from "@/routes/FrontEndRoutes/angularRoutes";
import cssRoutes from "@/routes/FrontEndRoutes/cssRoutes"
// import gatsbyRoutes from "@/routes/FrontEndRoutes/gatsbyRoutes";
import htmlRoutes from "@/routes/FrontEndRoutes/htmlRoutes";
import javascriptRoutes from "@/routes/FrontEndRoutes/javascriptRoutes";
import markdownRoutes from "@/routes/FrontEndRoutes/markdownRoutes";
// import nextJSRoutes from "@/routes/FrontEndRoutes/nextJSRoutes";
import reactRoutes from "@/routes/FrontEndRoutes/reactRoutes";
// import svelteRoutes from "@/routes/FrontEndRoutes/svelteRoutes";
// import viteRoutes from "@/routes/FrontEndRoutes/viteRoutes";
import reduxRoutes from "@/routes/FrontEndRoutes/reduxRoutes";
import vueRoutes from "@/routes/FrontEndRoutes/vueRoutes";



const frontEndRoutes: RouteObject[] = [

    ...angularRoutes,
    ...cssRoutes,
    // ...gatsbyRoutes,
    ...htmlRoutes,
    ...javascriptRoutes,
    ...markdownRoutes,
    // ...nextJSRoutes,
    ...reactRoutes,
    ...reduxRoutes,
    // ...svelteRoutes,
    // ...viteRoutes,
    ...vueRoutes,

];

export default frontEndRoutes;