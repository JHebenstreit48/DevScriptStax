import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildpacksAndNixpacks = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Deploys/BuildpacksAndNixpacks'));
const PreviewsAndBranches = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Deploys/PreviewsAndBranches'));

const Deploys: RouteObject[] = [
  {
    path: '/railway/basics/deploys/buildpacks-nixpacks',
    element: <BuildpacksAndNixpacks />,
  },
  {
    path: '/railway/basics/deploys/previews-branches',
    element: <PreviewsAndBranches />,
  },
];

export default Deploys;
