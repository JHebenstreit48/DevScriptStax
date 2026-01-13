import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsageCaps = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/CostControls/UsageCaps'));
const ProjectsAndTeams = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/CostControls/ProjectsAndTeams'));

const CostControls: RouteObject[] = [
  {
    path: '/railway/advanced/cost-controls/usage-caps',
    element: <UsageCaps />,
  },
  {
    path: '/railway/advanced/cost-controls/projects-teams',
    element: <ProjectsAndTeams />,
  },
];

export default CostControls;
