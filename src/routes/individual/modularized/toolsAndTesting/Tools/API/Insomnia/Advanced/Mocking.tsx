import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MockServer = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Insomnia/Advanced/Mocking/MockServer'));
const RouteVariants = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Insomnia/Advanced/Mocking/RouteVariants'));

const Mocking: RouteObject[] = [
  {
    path: '/tools/api/insomnia/advanced/mocking/mock-server',
    element: <MockServer />,
  },
  {
    path: '/tools/api/insomnia/advanced/mocking/route-variants',
    element: <RouteVariants />,
  },
];

export default Mocking;
