import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreToolsAndVSCode = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Deploys/CoreToolsAndVSCode'));
const RegionsAndScaling = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Deploys/RegionsAndScaling'));

const Deploys: RouteObject[] = [
  {
    path: '/azure-functions/basics/deploys/core-tools-vscode',
    element: <CoreToolsAndVSCode />,
  },
  {
    path: '/azure-functions/basics/deploys/regions-scaling',
    element: <RegionsAndScaling />,
  },
];

export default Deploys;
