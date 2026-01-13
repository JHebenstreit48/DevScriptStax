import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProxyFix = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Production/ProxyFix'));
const ErrorStrategy = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Production/ErrorStrategy'));

const Production: RouteObject[] = [
  {
    path: '/backend/frameworks/flask/advanced/production/proxy-fix',
    element: <ProxyFix />,
  },
  {
    path: '/backend/frameworks/flask/advanced/production/error-strategy',
    element: <ErrorStrategy />,
  },
];

export default Production;
