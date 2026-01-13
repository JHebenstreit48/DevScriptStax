import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnderstandingEndpoints = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/EndpointsAndResources/UnderstandingEndpoints'));
const URLStructureAndParameters = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/EndpointsAndResources/URLStructureAndParameters'));
const QueryVsPathParameters = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/EndpointsAndResources/QueryVsPathParameters'));
const Pagination = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/EndpointsAndResources/Pagination'));

const EndpointsAndResources: RouteObject[] = [
  {
    path: '/apis/rest/endpoints/overview',
    element: <UnderstandingEndpoints />,
  },
  {
    path: '/apis/rest/endpoints/url-structure',
    element: <URLStructureAndParameters />,
  },
  {
    path: '/apis/rest/endpoints/query-vs-path',
    element: <QueryVsPathParameters />,
  },
  {
    path: '/apis/rest/endpoints/pagination',
    element: <Pagination />,
  },
];

export default EndpointsAndResources;
