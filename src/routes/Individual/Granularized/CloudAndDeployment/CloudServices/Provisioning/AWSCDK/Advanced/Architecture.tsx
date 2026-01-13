import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AppStructure = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Architecture/AppStructure'));
const CrossStackRefs = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Architecture/CrossStackRefs'));

const Architecture: RouteObject[] = [
  {
    path: '/aws-cdk/advanced/architecture/app-structure',
    element: <AppStructure />,
  },
  {
    path: '/aws-cdk/advanced/architecture/cross-stack-refs',
    element: <CrossStackRefs />,
  },
];

export default Architecture;
