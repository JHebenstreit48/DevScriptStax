import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GrantTypes = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/GrantTypes'));
const PKCE = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/PKCE'));
const OIDC = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/OIDC'));
const OAuthInReact = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/OAuthInReact'));
const ServerSetup = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/ServerSetup'));

const OAuthOIDC: RouteObject[] = [
  {
    path: '/authentication/intermediate/oauth-oidc/grant-types',
    element: <GrantTypes />,
  },
  {
    path: '/authentication/intermediate/oauth-oidc/pkce',
    element: <PKCE />,
  },
  {
    path: '/authentication/intermediate/oauth-oidc/oidc',
    element: <OIDC />,
  },
  {
    path: '/authentication/intermediate/oauth-oidc/oauth-react',
    element: <OAuthInReact />,
  },
  {
    path: '/authentication/intermediate/oauth-oidc/server-setup',
    element: <ServerSetup />,
  },
];

export default OAuthOIDC;
