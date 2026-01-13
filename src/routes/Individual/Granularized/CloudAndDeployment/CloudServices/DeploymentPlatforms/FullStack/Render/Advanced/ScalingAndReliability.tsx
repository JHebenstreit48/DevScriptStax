import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Scaling = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/ScalingAndReliability/Scaling'));
const HealthChecks = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/ScalingAndReliability/HealthChecks'));
const ZeroDowntimeDeploys = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/ScalingAndReliability/ZeroDowntimeDeploys'));

const ScalingAndReliability: RouteObject[] = [
  {
    path: '/render/advanced/scaling-reliability/scaling',
    element: <Scaling />,
  },
  {
    path: '/render/advanced/scaling-reliability/health-checks',
    element: <HealthChecks />,
  },
  {
    path: '/render/advanced/scaling-reliability/zero-downtime',
    element: <ZeroDowntimeDeploys />,
  },
];

export default ScalingAndReliability;
