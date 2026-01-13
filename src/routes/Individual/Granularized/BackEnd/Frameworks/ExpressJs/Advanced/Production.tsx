import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TrustProxy = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Production/TrustProxy'));
const ProdErrorStrategy = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Production/ProdErrorStrategy'));

const Production: RouteObject[] = [
  {
    path: '/backend/frameworks/express/advanced/production/trust-proxy',
    element: <TrustProxy />,
  },
  {
    path: '/backend/frameworks/express/advanced/production/prod-error-strategy',
    element: <ProdErrorStrategy />,
  },
];

export default Production;
