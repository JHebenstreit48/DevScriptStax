import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildRequests = lazy(() => import('@/Pages/MainTabs/Tools/API/Insomnia/Basics/Requests/BuildRequests'));
const ParamsAndHeaders = lazy(() => import('@/Pages/MainTabs/Tools/API/Insomnia/Basics/Requests/ParamsAndHeaders'));
const BodiesAndFiles = lazy(() => import('@/Pages/MainTabs/Tools/API/Insomnia/Basics/Requests/BodiesAndFiles'));

const Requests: RouteObject[] = [
  {
    path: '/tools/api/insomnia/basics/requests/build',
    element: <BuildRequests />,
  },
  {
    path: '/tools/api/insomnia/basics/requests/params-headers',
    element: <ParamsAndHeaders />,
  },
  {
    path: '/tools/api/insomnia/basics/requests/bodies-files',
    element: <BodiesAndFiles />,
  },
];

export default Requests;
