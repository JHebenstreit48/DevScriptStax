import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Fundamentals/Introduction'));
const RenderVsOthers = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Fundamentals/RenderVsOthers'));
const PricingAndPlans = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Fundamentals/PricingAndPlans'));

const Fundamentals: RouteObject[] = [
  {
    path: '/render/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/render/basics/fundamentals/comparison',
    element: <RenderVsOthers />,
  },
  {
    path: '/render/basics/fundamentals/pricing',
    element: <PricingAndPlans />,
  },
];

export default Fundamentals;
