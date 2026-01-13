import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Fundamentals/Introduction'));
const PricingAndLimits = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Fundamentals/PricingAndLimits'));

const Fundamentals: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/akamai-edgeworkers/basics/fundamentals/pricing-limits',
    element: <PricingAndLimits />,
  },
];

export default Fundamentals;
