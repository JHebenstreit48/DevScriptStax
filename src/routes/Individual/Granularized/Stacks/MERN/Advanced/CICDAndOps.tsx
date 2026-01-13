import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildTestDeploy = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Advanced/CICDAndOps/BuildTestDeploy'));
const LogsAndMonitoring = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Advanced/CICDAndOps/LogsAndMonitoring'));

const CICDAndOps: RouteObject[] = [
  {
    path: '/mern/advanced/ci-cd-and-ops/build-test-deploy',
    element: <BuildTestDeploy />,
  },
  {
    path: '/mern/advanced/ci-cd-and-ops/logs-and-monitoring',
    element: <LogsAndMonitoring />,
  },
];

export default CICDAndOps;
