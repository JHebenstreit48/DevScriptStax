import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EnvVars = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/EnvAndConfig/EnvVars'));
const ServiceVars = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/EnvAndConfig/ServiceVars'));

const EnvAndConfig: RouteObject[] = [
  {
    path: '/railway/basics/env-config/env-vars-railway',
    element: <EnvVars />,
  },
  {
    path: '/railway/basics/env-config/service-vars',
    element: <ServiceVars />,
  },
];

export default EnvAndConfig;
