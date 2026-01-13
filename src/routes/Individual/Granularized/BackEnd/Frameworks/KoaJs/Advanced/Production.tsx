import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TrustProxy = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Advanced/Production/TrustProxy'));
const ErrorStrategy = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Advanced/Production/ErrorStrategy'));

const Production: RouteObject[] = [
  {
    path: '/backend/frameworks/koa/advanced/production/trust-proxy',
    element: <TrustProxy />,
  },
  {
    path: '/backend/frameworks/koa/advanced/production/error-strategy',
    element: <ErrorStrategy />,
  },
];

export default Production;
