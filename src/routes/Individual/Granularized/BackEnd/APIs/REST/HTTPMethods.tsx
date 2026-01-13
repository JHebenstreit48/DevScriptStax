import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/HTTPMethods/Overview'));
const DetailedGuide = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/HTTPMethods/DetailedGuide'));
const BestPractices = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/HTTPMethods/BestPractices'));
const IdempotencyAndSafe = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/HTTPMethods/IdempotencyAndSafe'));

const HTTPMethods: RouteObject[] = [
  {
    path: '/apis/rest/httpmethods/overview',
    element: <Overview />,
  },
  {
    path: '/apis/rest/httpmethods/detailed-guide',
    element: <DetailedGuide />,
  },
  {
    path: '/apis/rest/httpmethods/best-practices',
    element: <BestPractices />,
  },
  {
    path: '/apis/rest/httpmethods/idempotency-safe',
    element: <IdempotencyAndSafe />,
  },
];

export default HTTPMethods;
