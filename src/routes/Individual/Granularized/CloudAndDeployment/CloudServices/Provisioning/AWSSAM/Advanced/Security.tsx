import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecretsAndKMS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Security/SecretsAndKMS'));
const Permissions = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Security/Permissions'));

const Security: RouteObject[] = [
  {
    path: '/aws-sam/advanced/security/secrets-kms',
    element: <SecretsAndKMS />,
  },
  {
    path: '/aws-sam/advanced/security/permissions',
    element: <Permissions />,
  },
];

export default Security;
