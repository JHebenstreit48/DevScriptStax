import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InsoCLI = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Insomnia/Advanced/InsoAndCI/InsoCLI'));
const CIPipelines = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Insomnia/Advanced/InsoAndCI/CIPipelines'));

const InsoAndCI: RouteObject[] = [
  {
    path: '/tools/api/insomnia/advanced/inso-ci/inso-cli',
    element: <InsoCLI />,
  },
  {
    path: '/tools/api/insomnia/advanced/inso-ci/pipelines',
    element: <CIPipelines />,
  },
];

export default InsoAndCI;
