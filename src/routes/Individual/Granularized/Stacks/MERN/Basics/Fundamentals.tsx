import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Basics/Fundamentals/Introduction'));
const ArchitectureAndFolders = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Basics/Fundamentals/ArchitectureAndFolders'));

const Fundamentals: RouteObject[] = [
  {
    path: '/mern/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/mern/basics/fundamentals/architecture-and-folders',
    element: <ArchitectureAndFolders />,
  },
];

export default Fundamentals;
