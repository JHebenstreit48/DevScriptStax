import { RouteObject } from "react-router-dom";

import Markdown from "@/Pages/MainTabs/FrontEndPages/MarkdownPages/Markdown";
// import MarkdownCode from "@/pages/MarkdownPages/MarkdownCode";

const markdownRoutes: RouteObject[] = [
    {
        path: '/markdown',
        element: <Markdown />,
    },
    // {
    //     path: '/markdown/markdowncode',
    //     element: <MarkdownCode />,
    // },
];

export default markdownRoutes;