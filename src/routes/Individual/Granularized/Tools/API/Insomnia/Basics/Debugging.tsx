import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TimelineAndConsole = lazy(() => import('@/Pages/MainTabs/Tools/API/Insomnia/Basics/Debugging/TimelineAndConsole'));
const Troubleshoot = lazy(() => import('@/Pages/MainTabs/Tools/API/Insomnia/Basics/Debugging/Troubleshoot'));

const Debugging: RouteObject[] = [
  {
    path: '/tools/api/insomnia/basics/debugging/timeline-console',
    element: <TimelineAndConsole />,
  },
  {
    path: '/tools/api/insomnia/basics/debugging/troubleshoot',
    element: <Troubleshoot />,
  },
];

export default Debugging;
