import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GracefulShutdownAndSignals = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/NodeJs/Advanced/Production/GracefulShutdownAndSignals'));
const ProcessManagersAndCluster = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/NodeJs/Advanced/Production/ProcessManagersAndCluster'));

const Production: RouteObject[] = [
  {
    path: '/frameworks/nodejs/advanced/production/graceful-shutdown-signals',
    element: <GracefulShutdownAndSignals />,
  },
  {
    path: '/frameworks/nodejs/advanced/production/process-managers-cluster',
    element: <ProcessManagersAndCluster />,
  },
];

export default Production;
