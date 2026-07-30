import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TrustProxy = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/KoaJs/Advanced/Production/TrustProxy'));
const ErrorStrategy = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/KoaJs/Advanced/Production/ErrorStrategy'));

const Production: RouteObject[] = [
  {
    path: '/frameworks/koa/advanced/production/trust-proxy',
    element: <TrustProxy />,
  },
  {
    path: '/frameworks/koa/advanced/production/error-strategy',
    element: <ErrorStrategy />,
  },
];

export default Production;
