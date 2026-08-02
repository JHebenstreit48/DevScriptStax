import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/Fundamentals/Introduction')
);
const CreateRun = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/Fundamentals/CreatingRunning')
);
const CLI = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/Fundamentals/CLI')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/front-end/angular/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/front-end/angular/basics/fundamentals/creating-and-running',
    element: <CreateRun />,
  },
  {
    path: '/front-end/angular/basics/fundamentals/cli',
    element: <CLI />,
  },
];

export default Fundamentals;