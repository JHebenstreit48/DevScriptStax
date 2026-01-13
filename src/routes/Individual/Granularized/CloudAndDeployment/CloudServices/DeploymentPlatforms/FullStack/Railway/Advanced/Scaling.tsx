import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AutoscaleBasics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Scaling/AutoscaleBasics'));
const HealthChecks = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Scaling/HealthChecks'));

const Scaling: RouteObject[] = [
  {
    path: '/railway/advanced/scaling/autoscale-basics',
    element: <AutoscaleBasics />,
  },
  {
    path: '/railway/advanced/scaling/health-checks',
    element: <HealthChecks />,
  },
];

export default Scaling;
