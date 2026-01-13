import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ServerlessYml = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Projects/ServerlessYml'));
const StagesAndParams = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Projects/StagesAndParams'));

const Projects: RouteObject[] = [
  {
    path: '/serverless-framework/basics/projects/serverless-yml',
    element: <ServerlessYml />,
  },
  {
    path: '/serverless-framework/basics/projects/stages-params',
    element: <StagesAndParams />,
  },
];

export default Projects;
