import { RouteObject } from "react-router-dom";

import angularRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/angularRoutes";
import cssRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/cssRoutes"
// import gatsbyRoutes from "@/routes/FrontEndRoutes/gatsbyRoutes";
import htmlRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/htmlRoutes";
import javascriptRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/javascriptRoutes";
import markdownRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/markdownRoutes";
// import nextJSRoutes from "@/routes/FrontEndRoutes/nextJSRoutes";
import reactRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/reactRoutes";
// import svelteRoutes from "@/routes/FrontEndRoutes/svelteRoutes";
// import viteRoutes from "@/routes/FrontEndRoutes/viteRoutes";
import reduxRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/reduxRoutes";
import vueRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/vueRoutes";



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