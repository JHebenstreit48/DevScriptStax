import { RouteObject } from "react-router-dom";

import Angular from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/angular";
import CSS from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/css"
// import Gatsby from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/gatsby";
import HTML from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/html";
import JavaScript from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/javascript";
import Markdown from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/markdown";
// import NextJS from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/nextjs";
import React from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/react";
// import Svelte from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/svelte";
// import viteRoutes from "@/routes/FrontEndRoutes/viteRoutes";
import Redux from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/redux";
import Vue from "@/routes/IndividualRoutes/FullRoutes/FrontEndRoutes/vue";

const frontEndRoutes: RouteObject[] = [
    ...Angular,
    ...CSS,
    // ...Gatsby,
    ...HTML,
    ...JavaScript,
    ...Markdown,
    // ...NextJS,
    ...React,
    ...Redux,
    // ...Svelte,
    // ...viteRoutes,
    ...Vue,
];

export default frontEndRoutes;