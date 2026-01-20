import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EdgeFunctions = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Advanced/FunctionsAndEdge/EdgeFunctions'));
const ServerlessFunctions = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Advanced/FunctionsAndEdge/ServerlessFunctions'));

const FunctionsAndEdge: RouteObject[] = [
  {
    path: '/vercel/advanced/functions-edge/edge-functions',
    element: <EdgeFunctions />,
  },
  {
    path: '/vercel/advanced/functions-edge/serverless-functions',
    element: <ServerlessFunctions />,
  },
];

export default FunctionsAndEdge;
