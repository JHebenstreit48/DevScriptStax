import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IAMAndPolicies = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Security/IAMAndPolicies'));
const Secrets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Security/Secrets'));

const Security: RouteObject[] = [
  {
    path: '/serverless-framework/advanced/security/iam-policies',
    element: <IAMAndPolicies />,
  },
  {
    path: '/serverless-framework/advanced/security/secrets',
    element: <Secrets />,
  },
];

export default Security;
