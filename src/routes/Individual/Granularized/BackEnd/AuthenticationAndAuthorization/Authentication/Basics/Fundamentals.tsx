import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Fundamentals/Introduction'));
const SessionVsToken = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Fundamentals/SessionVsToken'));
const StatefulVsStateless = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Fundamentals/StatefulVsStateless'));
const MFA = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Fundamentals/MFA'));
const PasswordStorage = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Fundamentals/PasswordStorage'));

const Fundamentals: RouteObject[] = [
  {
    path: '/authentication/basics/fundamentals/intro',
    element: <Introduction />,
  },
  {
    path: '/authentication/basics/fundamentals/session-vs-token',
    element: <SessionVsToken />,
  },
  {
    path: '/authentication/basics/fundamentals/stateful-vs-stateless',
    element: <StatefulVsStateless />,
  },
  {
    path: '/authentication/basics/fundamentals/mfa',
    element: <MFA />,
  },
  {
    path: '/authentication/basics/fundamentals/passwords',
    element: <PasswordStorage />,
  },
];

export default Fundamentals;
