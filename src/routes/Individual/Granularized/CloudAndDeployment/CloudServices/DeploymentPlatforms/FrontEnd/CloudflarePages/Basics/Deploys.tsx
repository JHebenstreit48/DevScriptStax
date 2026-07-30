import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PreviewsAndBranches = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Deploys/PreviewsAndBranches'));
const Rollbacks = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Deploys/Rollbacks'));

const Deploys: RouteObject[] = [
  {
    path: '/cloudflare-pages/basics/deploys/previews-branches',
    element: <PreviewsAndBranches />,
  },
  {
    path: '/cloudflare-pages/basics/deploys/rollbacks',
    element: <Rollbacks />,
  },
];

export default Deploys;
