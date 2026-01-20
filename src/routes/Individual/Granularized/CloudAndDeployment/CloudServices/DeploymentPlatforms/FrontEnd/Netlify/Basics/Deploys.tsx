import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DeployPreviewsAndBranches = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Deploys/DeployPreviewsAndBranches'));
const RollbacksAndLocks = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Deploys/RollbacksAndLocks'));

const Deploys: RouteObject[] = [
  {
    path: '/netlify/basics/deploys/previews-branches',
    element: <DeployPreviewsAndBranches />,
  },
  {
    path: '/netlify/basics/deploys/rollbacks-locks',
    element: <RollbacksAndLocks />,
  },
];

export default Deploys;
