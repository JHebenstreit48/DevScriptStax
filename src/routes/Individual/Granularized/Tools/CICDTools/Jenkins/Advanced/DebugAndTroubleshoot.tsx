import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildLogsAndReplay = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Advanced/DebugAndTroubleshoot/BuildLogsAndReplay'));
const CommonFailures = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Advanced/DebugAndTroubleshoot/CommonFailures'));

const DebugAndTroubleshoot: RouteObject[] = [
  {
    path: '/tools/cicd/jenkins/advanced/debug-troubleshoot/logs-replay',
    element: <BuildLogsAndReplay />,
  },
  {
    path: '/tools/cicd/jenkins/advanced/debug-troubleshoot/common-failures',
    element: <CommonFailures />,
  },
];

export default DebugAndTroubleshoot;
