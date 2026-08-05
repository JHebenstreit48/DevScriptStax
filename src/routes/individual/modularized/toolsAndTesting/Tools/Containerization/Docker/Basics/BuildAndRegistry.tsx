import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildImages = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/Containerization/Docker/Basics/BuildAndRegistry/BuildImages'));
const PushPullAndRegistry = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/Containerization/Docker/Basics/BuildAndRegistry/PushPullAndRegistry'));

const BuildAndRegistry: RouteObject[] = [
  {
    path: '/docker/basics/build-and-registry/build-images',
    element: <BuildImages />,
  },
  {
    path: '/docker/basics/build-and-registry/push-pull-registry',
    element: <PushPullAndRegistry />,
  },
];

export default BuildAndRegistry;
