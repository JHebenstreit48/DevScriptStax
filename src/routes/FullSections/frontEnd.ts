import { RouteObject } from "react-router-dom";

import Angular from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/angular";
import CSS from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/css"
// import Gatsby from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/gatsby";
import HTML from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/html";
import Markdown from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/markdown";
// import NextJS from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/nextjs";
import React from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/react";
// import Svelte from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/svelte";
import Redux from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/redux";
import Vue from "@/routes/IndividualRoutes/FullRoutes/FrontEnd/vue";

const frontEnd: RouteObject[] = [
    ...Angular,
    ...CSS,
    // ...Gatsby,
    ...HTML,
    ...Markdown,
    // ...NextJS,
    ...React,
    ...Redux,
    // ...Svelte,
    ...Vue,
];

export default frontEnd;