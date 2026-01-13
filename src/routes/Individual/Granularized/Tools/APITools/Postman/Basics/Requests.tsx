import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildRequests = lazy(() => import('@/Pages/MainTabs/Tools/APITools/Postman/Basics/Requests/BuildRequests'));
const ParamsAndHeaders = lazy(() => import('@/Pages/MainTabs/Tools/APITools/Postman/Basics/Requests/ParamsAndHeaders'));
const BodiesAndFiles = lazy(() => import('@/Pages/MainTabs/Tools/APITools/Postman/Basics/Requests/BodiesAndFiles'));

const Requests: RouteObject[] = [
  {
    path: '/tools/api/postman/basics/requests/build',
    element: <BuildRequests />,
  },
  {
    path: '/tools/api/postman/basics/requests/params-headers',
    element: <ParamsAndHeaders />,
  },
  {
    path: '/tools/api/postman/basics/requests/bodies-files',
    element: <BodiesAndFiles />,
  },
];

export default Requests;
