import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EdgeFunctions = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Advanced/FunctionsAndEdge/EdgeFunctions'));
const ServerlessPatterns = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Advanced/FunctionsAndEdge/ServerlessPatterns'));

const FunctionsAndEdge: RouteObject[] = [
  {
    path: '/netlify/advanced/functions-edge/edge-functions',
    element: <EdgeFunctions />,
  },
  {
    path: '/netlify/advanced/functions-edge/serverless-patterns',
    element: <ServerlessPatterns />,
  },
];

export default FunctionsAndEdge;
