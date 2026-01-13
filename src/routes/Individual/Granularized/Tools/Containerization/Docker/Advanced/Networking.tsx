import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetworksAndDrivers = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/Networking/NetworksAndDrivers'));
const PortsDNSConnectivity = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/Networking/PortsDNSConnectivity'));

const Networking: RouteObject[] = [
  {
    path: '/tools/containerization/docker/advanced/networking/networks',
    element: <NetworksAndDrivers />,
  },
  {
    path: '/tools/containerization/docker/advanced/networking/ports-dns',
    element: <PortsDNSConnectivity />,
  },
];

export default Networking;
