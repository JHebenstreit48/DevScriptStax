import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildLogsAndReplay = lazy(() => import('@/Pages/MainTabs/Tools/CICD/Jenkins/Advanced/DebugAndTroubleshoot/BuildLogsAndReplay'));
const CommonFailures = lazy(() => import('@/Pages/MainTabs/Tools/CICD/Jenkins/Advanced/DebugAndTroubleshoot/CommonFailures'));

const DebugAndTroubleshoot: RouteObject[] = [
  {
    path: '/ci-cd/jenkins/advanced/debug-troubleshoot/logs-replay',
    element: <BuildLogsAndReplay />,
  },
  {
    path: '/ci-cd/jenkins/advanced/debug-troubleshoot/common-failures',
    element: <CommonFailures />,
  },
];

export default DebugAndTroubleshoot;
