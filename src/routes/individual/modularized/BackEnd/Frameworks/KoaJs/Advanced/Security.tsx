import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CORS = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/KoaJs/Advanced/Security/CORS'));
const Helmet = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/KoaJs/Advanced/Security/Helmet'));
const CSRF = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/KoaJs/Advanced/Security/CSRF'));

const Security: RouteObject[] = [
  {
    path: '/frameworks/koa/advanced/security/cors',
    element: <CORS />,
  },
  {
    path: '/frameworks/koa/advanced/security/helmet',
    element: <Helmet />,
  },
  {
    path: '/frameworks/koa/advanced/security/csrf',
    element: <CSRF />,
  },
];

export default Security;
