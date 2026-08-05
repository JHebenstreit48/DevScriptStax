import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/TSLint/Basics/Fundamentals/Introduction'));
const StatusAndDeprecation = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/TSLint/Basics/Fundamentals/StatusAndDeprecation'));

const Fundamentals: RouteObject[] = [
  {
    path: '/tslint/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/tslint/basics/fundamentals/status-deprecation',
    element: <StatusAndDeprecation />,
  },
];

export default Fundamentals;
