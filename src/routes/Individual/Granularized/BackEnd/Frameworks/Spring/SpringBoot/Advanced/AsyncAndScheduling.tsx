import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AsyncAndExecutors = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/AsyncAndScheduling/AsyncAndExecutors'));
const Scheduling = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/AsyncAndScheduling/Scheduling'));

const AsyncAndScheduling: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/async-scheduling/async-executors',
    element: <AsyncAndExecutors />,
  },
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/async-scheduling/scheduling',
    element: <Scheduling />,
  },
];

export default AsyncAndScheduling;
