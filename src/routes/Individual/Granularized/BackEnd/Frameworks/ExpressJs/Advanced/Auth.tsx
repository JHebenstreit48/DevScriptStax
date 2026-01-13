import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PassportJs = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Auth/PassportJs'));
const JWT = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Auth/JWT'));
const Sessions = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Auth/Sessions'));

const Auth: RouteObject[] = [
  {
    path: '/backend/frameworks/express/advanced/auth/passport',
    element: <PassportJs />,
  },
  {
    path: '/backend/frameworks/express/advanced/auth/jwt',
    element: <JWT />,
  },
  {
    path: '/backend/frameworks/express/advanced/auth/sessions',
    element: <Sessions />,
  },
];

export default Auth;
