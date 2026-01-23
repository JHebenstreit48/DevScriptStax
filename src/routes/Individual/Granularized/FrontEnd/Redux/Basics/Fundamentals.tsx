import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/Fundamentals/Introduction'));
const CoreConcepts = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/Fundamentals/CoreConcepts'));
const DataFlow = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/Fundamentals/DataFlow'));

const Fundamentals: RouteObject[] = [
  {
    path: '/redux/basics/fundamentals/Introduction',
    element: <Introduction />,
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
