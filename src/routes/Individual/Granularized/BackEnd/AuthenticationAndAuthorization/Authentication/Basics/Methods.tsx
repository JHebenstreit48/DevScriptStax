import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Sessions = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Methods/Sessions'));
const JWT = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Methods/JWT'));
const APIKeys = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Methods/APIKeys'));

const Methods: RouteObject[] = [
  {
    path: '/authentication/basics/methods/sessions',
    element: <Sessions />,
  },
  {
    path: '/authentication/basics/methods/jwt',
    element: <JWT />,
  },
  {
    path: '/authentication/basics/methods/api-keys',
    element: <APIKeys />,
  },
];

export default Methods;
