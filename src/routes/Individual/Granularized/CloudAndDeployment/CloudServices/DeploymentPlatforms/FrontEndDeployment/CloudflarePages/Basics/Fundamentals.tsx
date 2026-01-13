import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Fundamentals/Introduction'));
const PricingAndLimits = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Fundamentals/PricingAndLimits'));

const Fundamentals: RouteObject[] = [
  {
    path: '/cloudflare-pages/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/cloudflare-pages/basics/fundamentals/pricing-limits',
    element: <PricingAndLimits />,
  },
];

export default Fundamentals;
