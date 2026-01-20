import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TeamsAndRoles = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/EnterpriseAndTeams/TeamsAndRoles'));
const AuditAndSSO = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/EnterpriseAndTeams/AuditAndSSO'));

const EnterpriseAndTeams: RouteObject[] = [
  {
    path: '/netlify/advanced/enterprise-teams/teams-roles',
    element: <TeamsAndRoles />,
  },
  {
    path: '/netlify/advanced/enterprise-teams/audit-sso',
    element: <AuditAndSSO />,
  },
];

export default EnterpriseAndTeams;
