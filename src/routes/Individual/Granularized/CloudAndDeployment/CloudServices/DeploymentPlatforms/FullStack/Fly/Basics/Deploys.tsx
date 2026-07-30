import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DockerAndNixpacks = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Deploys/DockerAndNixpacks'));
const ScalingBasics = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Deploys/ScalingBasics'));

const Deploys: RouteObject[] = [
  {
    path: '/fly/basics/deploys/docker-nixpacks',
    element: <DockerAndNixpacks />,
  },
  {
    path: '/fly/basics/deploys/scaling-basics',
    element: <ScalingBasics />,
  },
];

export default Deploys;
