import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ChoosingARunner = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Advanced/Runners/ChoosingARunner'));
const DOMVsNodeEnvs = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Advanced/Runners/DOMVsNodeEnvs'));

const Runners: RouteObject[] = [
  {
    path: '/javascript/testing/advanced/runners-overview/choosing-a-runner',
    element: <ChoosingARunner />,
  },
  {
    path: '/javascript/testing/advanced/runners-overview/dom-vs-node-envs',
    element: <DOMVsNodeEnvs />,
  },
];

export default Runners;
