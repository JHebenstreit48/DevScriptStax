import { RouteObject } from "react-router-dom";

import Angular from "@/routes/Individual/FullRoutes/FrontEnd/angular";
import CSS from "@/routes/Individual/FullRoutes/FrontEnd/css"
import Gatsby from "@/routes/Individual/FullRoutes/FrontEnd/gatsby";
import HTML from "@/routes/Individual/FullRoutes/FrontEnd/html";
import Markdown from "@/routes/Individual/FullRoutes/FrontEnd/markdown";
import NextJS from "@/routes/Individual/FullRoutes/FrontEnd/nextJS";
import React from "@/routes/Individual/FullRoutes/FrontEnd/react";
import Svelte from "@/routes/Individual/FullRoutes/FrontEnd/svelte";
import Redux from "@/routes/Individual/FullRoutes/FrontEnd/redux";
import Vue from "@/routes/Individual/FullRoutes/FrontEnd/vue";

const frontEnd: RouteObject[] = [
    ...Angular,
    ...CSS,
    ...Gatsby,
    ...HTML,
    ...Markdown,
    ...NextJS,
    ...React,
    ...Redux,
    ...Svelte,
    ...Vue,
];

export default frontEnd;