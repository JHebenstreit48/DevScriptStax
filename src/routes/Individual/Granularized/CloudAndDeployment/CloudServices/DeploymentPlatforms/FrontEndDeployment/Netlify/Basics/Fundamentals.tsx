import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Fundamentals/Introduction'));
const PlatformModel = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Fundamentals/PlatformModel'));
const PricingAndPlans = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Fundamentals/PricingAndPlans'));

const Fundamentals: RouteObject[] = [
  {
    path: '/netlify/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/netlify/basics/fundamentals/platform-model',
    element: <PlatformModel />,
  },
  {
    path: '/netlify/basics/fundamentals/pricing-plans',
    element: <PricingAndPlans />,
  },
];

export default Fundamentals;
