import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/Compose/Introduction'));
const Syntax = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/Compose/Syntax'));
const MultiContainerApps = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/Compose/MultiContainerApps'));
const ScalingLoadBalancing = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/Compose/ScalingLoadBalancing'));

const Compose: RouteObject[] = [
  {
    path: '/docker/basics/compose/introduction',
    element: <Introduction />,
  },
  {
    path: '/docker/basics/compose/syntax',
    element: <Syntax />,
  },
  {
    path: '/docker/basics/compose/multi-container',
    element: <MultiContainerApps />,
  },
  {
    path: '/docker/basics/compose/scaling-and-load',
    element: <ScalingLoadBalancing />,
  },
];

export default Compose;
