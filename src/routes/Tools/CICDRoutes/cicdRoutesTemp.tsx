import { RouteObject } from "react-router-dom";

import CICDOps from "@/Pages/ToolsPages/CICDOpsPages/CICDOps";
// import CICDOpsCode from "@/pages/CICDOpsPages/CICDOpsCode";

const cicdOpsTempRoutes: RouteObject[] = [

{
    path: '/cicdops',
    element: <CICDOps />,
},
// {
//     path: '/cicdops/cicdopscode',
//     element: <CICDOpsCode />,
// },
];

export default cicdOpsTempRoutes;