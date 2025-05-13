import { RouteObject } from 'react-router-dom';

import Node from "@/Pages/BackEndPages/FrameworksPages/NodePages/Node";
// import NodeCode from "@/pages/NodePages/NodeCode";

const nodeJSRoutes: RouteObject[] = [
    {
        path: '/node',
        element: <Node />,
    },
    // {
    //     path: '/node/nodecode',
    //     element: <NodeCode />,
    // },
];

export default nodeJSRoutes;