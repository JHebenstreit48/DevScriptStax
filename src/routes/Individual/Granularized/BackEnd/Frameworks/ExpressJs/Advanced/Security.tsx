import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CORS = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Security/CORS'));
const HelmetAndRateLimit = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Security/HelmetAndRateLimit'));
const CSRF = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Security/CSRF'));

const Security: RouteObject[] = [
  {
    path: '/frameworks/express/advanced/security/cors',
    element: <CORS />,
  },
  {
    path: '/frameworks/express/advanced/security/helmet-rate-limit',
    element: <HelmetAndRateLimit />,
  },
  {
    path: '/frameworks/express/advanced/security/csrf-cookies',
    element: <CSRF />,
  },
];

export default Security;
