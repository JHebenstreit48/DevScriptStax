import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecretsAndPolicies = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Security/SecretsAndPolicies'));
const SSOAndTeams = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Security/SSOAndTeams'));

const Security: RouteObject[] = [
  {
    path: '/fly/advanced/security/secrets-policies',
    element: <SecretsAndPolicies />,
  },
  {
    path: '/fly/advanced/security/sso-teams',
    element: <SSOAndTeams />,
  },
];

export default Security;
