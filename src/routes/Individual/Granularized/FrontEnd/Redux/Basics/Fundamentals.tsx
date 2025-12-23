import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/Fundamentals/Overview'));
const CoreConcepts = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/Fundamentals/CoreConcepts'));
const DataFlow = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/Fundamentals/DataFlow'));

const Fundamentals: RouteObject[] = [
  {
    path: '/redux/basics/fundamentals/overview',
    element: <Overview />,
  },
  {
    path: '/redux/basics/fundamentals/core-concepts',
    element: <CoreConcepts />,
  },
  {
    path: '/redux/basics/fundamentals/data-flow',
    element: <DataFlow />,
  },
];

export default Fundamentals;
