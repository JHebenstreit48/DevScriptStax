import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/Introduction'));
const RBAC = lazy(() => import('@/pages/mainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/RBAC'));
const PBAC = lazy(() => import('@/pages/mainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/PBAC'));
const JWTClaims = lazy(() => import('@/pages/mainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/JWTClaims'));
const OAuthScopes = lazy(() => import('@/pages/mainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/Fundamentals/OAuthScopes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/authorization/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/authorization/basics/fundamentals/rbac',
    element: <RBAC />,
  },
  {
    path: '/authorization/basics/fundamentals/pbac',
    element: <PBAC />,
  },
  {
    path: '/authorization/basics/fundamentals/jwt',
    element: <JWTClaims />,
  },
  {
    path: '/authorization/basics/fundamentals/oauth-scopes',
    element: <OAuthScopes />,
  },
];

export default Fundamentals;
