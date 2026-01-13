import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FlaskLogin = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Auth/FlaskLogin'));
const JWT = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Auth/JWT'));
const Sessions = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Auth/Sessions'));

const Auth: RouteObject[] = [
  {
    path: '/backend/frameworks/flask/advanced/auth/flask-login',
    element: <FlaskLogin />,
  },
  {
    path: '/backend/frameworks/flask/advanced/auth/jwt',
    element: <JWT />,
  },
  {
    path: '/backend/frameworks/flask/advanced/auth/sessions',
    element: <Sessions />,
  },
];

export default Auth;
