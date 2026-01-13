import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BruteForce = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/BruteForce'));
const HijackingCSRF = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/HijackingCSRF'));
const CredentialStuffing = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/CredentialStuffing'));
const Passwordless = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/Passwordless'));
const ZeroTrust = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/ZeroTrust'));

const Security: RouteObject[] = [
  {
    path: '/authentication/advanced/security/brute-force',
    element: <BruteForce />,
  },
  {
    path: '/authentication/advanced/security/hijacking-csrf',
    element: <HijackingCSRF />,
  },
  {
    path: '/authentication/advanced/security/credential-stuffing',
    element: <CredentialStuffing />,
  },
  {
    path: '/authentication/advanced/security/passwordless',
    element: <Passwordless />,
  },
  {
    path: '/authentication/advanced/security/zero-trust',
    element: <ZeroTrust />,
  },
];

export default Security;
