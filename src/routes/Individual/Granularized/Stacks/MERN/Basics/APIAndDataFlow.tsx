import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RESTConventionsAndDTOs = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Basics/APIAndDataFlow/RESTConventionsAndDTOs'));
const ClientIntegration = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Basics/APIAndDataFlow/ClientIntegration'));

const APIAndDataFlow: RouteObject[] = [
  {
    path: '/mern/basics/api-and-data-flow/rest-conventions-and-dtos',
    element: <RESTConventionsAndDTOs />,
  },
  {
    path: '/mern/basics/api-and-data-flow/client-integration',
    element: <ClientIntegration />,
  },
];

export default APIAndDataFlow;
