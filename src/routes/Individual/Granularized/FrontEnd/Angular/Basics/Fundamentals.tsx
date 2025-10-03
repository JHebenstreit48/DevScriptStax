import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/Fundamentals/Introduction')
);
const CreateRun = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/Fundamentals/CreatingRunningApp')
);
const CLI = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/Fundamentals/CLI')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/angular/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/angular/basics/fundamentals/creating-and-running',
    element: <CreateRun />,
  },
  {
    path: '/angular/basics/fundamentals/cli',
    element: <CLI />,
  },
];

export default Fundamentals;