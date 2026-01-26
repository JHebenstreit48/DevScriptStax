import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MockServers = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Advanced/Mocking/MockServers'));
const SimulatedAPIs = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Advanced/Mocking/SimulatedAPIs'));

const Mocking: RouteObject[] = [
  {
    path: '/tools/api/postman/advanced/mocking/mock-servers',
    element: <MockServers />,
  },
  {
    path: '/tools/api/postman/advanced/mocking/simulated-apis',
    element: <SimulatedAPIs />,
  },
];

export default Mocking;
