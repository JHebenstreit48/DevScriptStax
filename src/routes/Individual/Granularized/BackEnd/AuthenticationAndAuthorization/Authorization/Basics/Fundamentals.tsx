import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/Introduction'));
const RBAC = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/RBAC'));
const PBAC = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/PBAC'));
const JWTClaims = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/JWTClaims'));
const OAuthScopes = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/OAuthScopes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/authz/basics/fundamentals/intro',
    element: <Introduction />,
  },
  {
    path: '/authz/basics/fundamentals/rbac',
    element: <RBAC />,
  },
  {
    path: '/authz/basics/fundamentals/pbac',
    element: <PBAC />,
  },
  {
    path: '/authz/basics/fundamentals/jwt',
    element: <JWTClaims />,
  },
  {
    path: '/authz/basics/fundamentals/oauth-scopes',
    element: <OAuthScopes />,
  },
];

export default Fundamentals;
