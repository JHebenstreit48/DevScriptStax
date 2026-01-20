import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Fundamentals/Introduction'));
const PlatformModel = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Fundamentals/PlatformModel'));
const PricingAndPlans = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Fundamentals/PricingAndPlans'));

const Fundamentals: RouteObject[] = [
  {
    path: '/cloud-services/deployment/front-end/netlify/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/cloud-services/deployment/front-end/netlify/basics/fundamentals/platform-model',
    element: <PlatformModel />,
  },
  {
    path: '/cloud-services/deployment/front-end/netlify/basics/fundamentals/pricing-plans',
    element: <PricingAndPlans />,
  },
];

export default Fundamentals;
