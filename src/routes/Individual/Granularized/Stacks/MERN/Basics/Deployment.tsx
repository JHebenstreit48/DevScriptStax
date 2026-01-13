import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SingleVsSplitOrigin = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Basics/Deployment/SingleVsSplitOrigin'));
const ProdEnvAndSecrets = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Basics/Deployment/ProdEnvAndSecrets'));

const Deployment: RouteObject[] = [
  {
    path: '/mern/basics/deployment/single-vs-split-origin',
    element: <SingleVsSplitOrigin />,
  },
  {
    path: '/mern/basics/deployment/prod-env-and-secrets',
    element: <ProdEnvAndSecrets />,
  },
];

export default Deployment;
