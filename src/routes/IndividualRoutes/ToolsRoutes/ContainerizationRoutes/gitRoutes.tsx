import { RouteObject } from "react-router-dom";

// ========================================================
//                          Git Notes Start
// ========================================================

import Git from "@/Pages/ToolsPages/GitPages/Git";
// import GitCode from "@/pages/GitPages/GitCode";

// ========================================================
//                           Git Notes End
// ========================================================

const gitRoutes: RouteObject[] = [
    {
        path: '/git',
        element: <Git />,
    },
    // {
    //     path: '/git/gitcode',
    //     element: <GitCode />,
    // },
];

export default gitRoutes;
