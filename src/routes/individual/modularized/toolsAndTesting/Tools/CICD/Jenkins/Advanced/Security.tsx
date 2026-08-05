import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecurityAndAuthentication = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CICD/Jenkins/Advanced/Security/SecurityAndAuthentication'));
const CredentialsAndSecrets = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CICD/Jenkins/Advanced/Security/CredentialsAndSecrets'));

const Security: RouteObject[] = [
  {
    path: '/ci-cd/jenkins/advanced/security/security',
    element: <SecurityAndAuthentication />,
  },
  {
    path: '/ci-cd/jenkins/advanced/security/credentials-secrets',
    element: <CredentialsAndSecrets />,
  },
];

export default Security;
