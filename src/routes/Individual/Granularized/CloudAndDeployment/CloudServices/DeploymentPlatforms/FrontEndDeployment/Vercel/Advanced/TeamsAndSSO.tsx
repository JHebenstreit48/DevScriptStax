import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TeamsAndRoles = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/TeamsAndSSO/TeamsAndRoles'));
const AuditAndSSO = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/TeamsAndSSO/AuditAndSSO'));

const TeamsAndSSO: RouteObject[] = [
  {
    path: '/vercel/advanced/teams-sso/teams-roles',
    element: <TeamsAndRoles />,
  },
  {
    path: '/vercel/advanced/teams-sso/audit-sso',
    element: <AuditAndSSO />,
  },
];

export default TeamsAndSSO;
