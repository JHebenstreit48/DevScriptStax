import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CORS = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Security/CORS'));
const CSRF = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Security/CSRF'));

const Security: RouteObject[] = [
  {
    path: '/frameworks/flask/advanced/security/cors',
    element: <CORS />,
  },
  {
    path: '/frameworks/flask/advanced/security/csrf',
    element: <CSRF />,
  },
];

export default Security;
