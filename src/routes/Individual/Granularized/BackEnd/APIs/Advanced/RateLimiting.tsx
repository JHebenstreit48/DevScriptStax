import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Importance = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Advanced/RateLimiting/Importance'));
const RateLimitingTechniques = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Advanced/RateLimiting/RateLimitingTechniques'));
const HandlingRateLimitsAsAConsumer = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Advanced/RateLimiting/HandlingRateLimitsAsAConsumer'));

const RateLimiting: RouteObject[] = [
  {
    path: '/apis/advanced/rate-limiting/importance',
    element: <Importance />,
  },
  {
    path: '/apis/advanced/rate-limiting/strategies',
    element: <RateLimitingTechniques />,
  },
  {
    path: '/apis/advanced/rate-limiting/consumer-handling',
    element: <HandlingRateLimitsAsAConsumer />,
  },
];

export default RateLimiting;
