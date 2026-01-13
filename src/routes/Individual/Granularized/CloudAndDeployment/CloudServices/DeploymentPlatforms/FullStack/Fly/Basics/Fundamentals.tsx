import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Fundamentals/Introduction'));
const PricingAndLimits = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Fundamentals/PricingAndLimits'));

const Fundamentals: RouteObject[] = [
  {
    path: '/fly/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/fly/basics/fundamentals/pricing-limits',
    element: <PricingAndLimits />,
  },
];

export default Fundamentals;
