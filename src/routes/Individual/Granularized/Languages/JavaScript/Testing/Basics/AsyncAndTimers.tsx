import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AsyncAwaitPatterns = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Basics/AsyncAndTimers/AsyncAwaitPatterns'));
const TimersAndMicrotasks = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Basics/AsyncAndTimers/TimersAndMicrotasks'));

const AsyncAndTimers: RouteObject[] = [
  {
    path: '/javascript/testing/basics/async-and-timers/async-await-patterns',
    element: <AsyncAwaitPatterns />,
  },
  {
    path: '/javascript/testing/basics/async-and-timers/timers-and-microtasks',
    element: <TimersAndMicrotasks />,
  },
];

export default AsyncAndTimers;
