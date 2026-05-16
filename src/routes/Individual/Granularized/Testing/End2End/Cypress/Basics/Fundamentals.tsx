import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Basics/Fundamentals/Introduction'));
const Setup = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Basics/Fundamentals/Setup'));
const RunningTestsAndModes = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Basics/Fundamentals/RunningTestsAndModes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/testing/e2e/cypress/basics/fundamentals/setup',
    element: <Setup />,
  },
  {
    path: '/testing/e2e/cypress/basics/fundamentals/first-test',
    element: <RunningTestsAndModes />,
  }
];

export default Fundamentals;