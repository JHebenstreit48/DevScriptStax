import { RouteObject } from "react-router-dom";

import angularRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/angular";
import cssRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/css"
// import gatsbyRoutes from "@/routes/FrontEndRoutes/gatsbyRoutes";
import htmlRoutes from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/html";
import javascriptRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/javascript";
import markdownRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/markdown";
// import nextJSRoutes from "@/routes/FrontEndRoutes/nextJSRoutes";
import reactRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/react";
// import svelteRoutes from "@/routes/FrontEndRoutes/svelteRoutes";
// import viteRoutes from "@/routes/FrontEndRoutes/viteRoutes";
import reduxRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/redux";
import vueRoutes from "@/routes/IndividualRoutes/FrontEndRoutes/vue";

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