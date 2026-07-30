import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TeamsAndRoles = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Security/TeamsAndRoles'));
const SecretsAndAccess = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Security/SecretsAndAccess'));

const Security: RouteObject[] = [
  {
    path: '/railway/advanced/security/teams-roles',
    element: <TeamsAndRoles />,
  },
  {
    path: '/railway/advanced/security/secrets-access',
    element: <SecretsAndAccess />,
  },
];

export default Security;
