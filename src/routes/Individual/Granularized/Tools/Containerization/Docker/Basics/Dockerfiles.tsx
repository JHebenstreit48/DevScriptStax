import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/Dockerfiles/Basics'));
const Dockerignore = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/Dockerfiles/Dockerignore'));

const Dockerfiles: RouteObject[] = [
  {
    path: '/docker/basics/dockerfile/basics',
    element: <Basics />,
  },
  {
    path: '/docker/basics/dockerfile/dockerignore',
    element: <Dockerignore />,
  },
];

export default Dockerfiles;
