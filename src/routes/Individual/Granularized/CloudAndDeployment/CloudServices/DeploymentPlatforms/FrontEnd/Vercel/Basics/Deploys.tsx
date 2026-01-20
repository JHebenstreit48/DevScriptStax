import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PreviewsAndBranches = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/Deploys/PreviewsAndBranches'));
const RollbacksAndAliases = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/Deploys/RollbacksAndAliases'));

const Deploys: RouteObject[] = [
  {
    path: '/vercel/basics/deploys/previews-branches',
    element: <PreviewsAndBranches />,
  },
  {
    path: '/vercel/basics/deploys/rollbacks-aliases',
    element: <RollbacksAndAliases />,
  },
];

export default Deploys;
