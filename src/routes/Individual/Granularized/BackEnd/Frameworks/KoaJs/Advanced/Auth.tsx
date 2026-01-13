import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JWT = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Advanced/Auth/JWT'));
const Sessions = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Advanced/Auth/Sessions'));
const Passport = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Advanced/Auth/Passport'));

const Auth: RouteObject[] = [
  {
    path: '/backend/frameworks/koa/advanced/auth/jwt-koa',
    element: <JWT />,
  },
  {
    path: '/backend/frameworks/koa/advanced/auth/sessions',
    element: <Sessions />,
  },
  {
    path: '/backend/frameworks/koa/advanced/auth/passport-koa',
    element: <Passport />,
  },
];

export default Auth;
