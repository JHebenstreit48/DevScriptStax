import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecurityAndAuthentication = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Advanced/Security/SecurityAndAuthentication'));
const CredentialsAndSecrets = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Advanced/Security/CredentialsAndSecrets'));

const Security: RouteObject[] = [
  {
    path: '/tools/cicd/jenkins/advanced/security/security',
    element: <SecurityAndAuthentication />,
  },
  {
    path: '/tools/cicd/jenkins/advanced/security/credentials-secrets',
    element: <CredentialsAndSecrets />,
  },
];

export default Security;
