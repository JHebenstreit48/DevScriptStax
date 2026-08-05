import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildLogsAndReplay = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CICD/Jenkins/Advanced/DebugAndTroubleshoot/BuildLogsAndReplay'));
const CommonFailures = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CICD/Jenkins/Advanced/DebugAndTroubleshoot/CommonFailures'));

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
