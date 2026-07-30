import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreateAccount = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Setup/CreateAccount'));
const NewProjectAndDeploy = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Setup/NewProjectAndDeploy'));

const Setup: RouteObject[] = [
  {
    path: '/railway/basics/setup/create-account',
    element: <CreateAccount />,
  },
  {
    path: '/railway/basics/setup/new-project-deploy',
    element: <NewProjectAndDeploy />,
  },
];

export default Setup;
