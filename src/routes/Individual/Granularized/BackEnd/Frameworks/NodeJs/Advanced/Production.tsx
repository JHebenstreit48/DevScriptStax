import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GracefulShutdownAndSignals = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Advanced/Production/GracefulShutdownAndSignals'));
const ProcessManagersAndCluster = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Advanced/Production/ProcessManagersAndCluster'));

const Production: RouteObject[] = [
  {
    path: '/backend/frameworks/nodejs/advanced/production/graceful-shutdown-signals',
    element: <GracefulShutdownAndSignals />,
  },
  {
    path: '/backend/frameworks/nodejs/advanced/production/process-managers-cluster',
    element: <ProcessManagersAndCluster />,
  },
];

export default Production;
