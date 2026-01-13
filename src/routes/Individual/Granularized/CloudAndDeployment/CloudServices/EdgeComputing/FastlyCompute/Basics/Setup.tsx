import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FastlyCLIAndAuth = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Setup/FastlyCLIAndAuth'));
const ServiceSetup = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Setup/ServiceSetup'));

const Setup: RouteObject[] = [
  {
    path: '/fastly-compute/basics/setup/fastly-cli-auth',
    element: <FastlyCLIAndAuth />,
  },
  {
    path: '/fastly-compute/basics/setup/service-setup',
    element: <ServiceSetup />,
  },
];

export default Setup;
