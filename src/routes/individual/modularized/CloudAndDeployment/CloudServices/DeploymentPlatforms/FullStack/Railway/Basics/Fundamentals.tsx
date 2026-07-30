import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Fundamentals/Introduction'));
const PricingAndLimits = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Fundamentals/PricingAndLimits'));

const Fundamentals: RouteObject[] = [
  {
    path: '/railway/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/railway/basics/fundamentals/pricing-limits',
    element: <PricingAndLimits />,
  },
];

export default Fundamentals;
