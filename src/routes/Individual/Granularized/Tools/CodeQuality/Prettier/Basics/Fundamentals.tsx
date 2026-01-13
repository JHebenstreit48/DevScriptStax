import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Basics/Fundamentals/Introduction'));
const OptionsAndDefaults = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Basics/Fundamentals/OptionsAndDefaults'));

const Fundamentals: RouteObject[] = [
  {
    path: '/prettier/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/prettier/basics/fundamentals/options-defaults',
    element: <OptionsAndDefaults />,
  },
];

export default Fundamentals;
