import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsExecInspect = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/DebugAndTroubleshoot/LogsExecInspect'));
const CommonIssues = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/DebugAndTroubleshoot/CommonIssues'));

const DebugAndTroubleshoot: RouteObject[] = [
  {
    path: '/tools/containerization/docker/advanced/debug/logs-exec-inspect',
    element: <LogsExecInspect />,
  },
  {
    path: '/tools/containerization/docker/advanced/debug/common-issues',
    element: <CommonIssues />,
  },
];

export default DebugAndTroubleshoot;
