import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreConcepts = lazy(() => import('@/Pages/MainTabs/Glossary/BackEnd/Frameworks/NodeJS/CoreConcepts'));
const CommonPackages = lazy(() => import('@/Pages/MainTabs/Glossary/BackEnd/Frameworks/NodeJS/CommonPackages'));

const NodeJS: RouteObject[] = [
  {
    path: '/glossary/backend/frameworks/node-js/core-concepts',
    element: <CoreConcepts />,
  },
  {
    path: '/glossary/backend/frameworks/node-js/common-packages',
    element: <CommonPackages />,
  },
];

export default NodeJS;