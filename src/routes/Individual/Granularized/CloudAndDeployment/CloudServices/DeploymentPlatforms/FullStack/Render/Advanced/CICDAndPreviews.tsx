import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GitIntegrations = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/CICDAndPreviews/GitIntegrations'));
const PreviewEnvironments = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/CICDAndPreviews/PreviewEnvironments'));

const CICDAndPreviews: RouteObject[] = [
  {
    path: '/render/advanced/ci-cd/git-integrations',
    element: <GitIntegrations />,
  },
  {
    path: '/render/advanced/ci-cd/preview-environments',
    element: <PreviewEnvironments />,
  },
];

export default CICDAndPreviews;
