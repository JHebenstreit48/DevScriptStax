import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IAMAndPolicies = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Security/IAMAndPolicies'));
const SecretsAndKMS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Security/SecretsAndKMS'));

const Security: RouteObject[] = [
  {
    path: '/aws-cdk/advanced/security/iam-policies',
    element: <IAMAndPolicies />,
  },
  {
    path: '/aws-cdk/advanced/security/secrets-kms',
    element: <SecretsAndKMS />,
  },
];

export default Security;
