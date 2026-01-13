import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Fundamentals/Introduction'));
const PricingAndLimits = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Fundamentals/PricingAndLimits'));

const Fundamentals: RouteObject[] = [
  {
    path: '/cloudflare-workers/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/cloudflare-workers/basics/fundamentals/pricing-limits',
    element: <PricingAndLimits />,
  },
];

export default Fundamentals;
