import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NpmAndNpx = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Tooling/NpmAndNpx'));
const NodeVersions = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Tooling/NodeVersions'));

const Tooling: RouteObject[] = [
  {
    path: '/backend/frameworks/nodejs/basics/tooling/npm-npx',
    element: <NpmAndNpx />,
  },
  {
    path: '/backend/frameworks/nodejs/basics/tooling/nvm-versions',
    element: <NodeVersions />,
  },
];

export default Tooling;
