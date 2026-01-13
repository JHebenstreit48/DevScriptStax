import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CLIBasics = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/CLIAndWorkflow/CLIBasics'));
const ContainersAndImages = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/CLIAndWorkflow/ContainersAndImages'));

const CLIAndWorkflow: RouteObject[] = [
  {
    path: '/docker/basics/cli-and-workflow/cli',
    element: <CLIBasics />,
  },
  {
    path: '/docker/basics/cli-and-workflow/containers-and-images',
    element: <ContainersAndImages />,
  },
];

export default CLIAndWorkflow;
