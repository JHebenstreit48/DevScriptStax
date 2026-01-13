import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommonJSVsESM = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages/CommonJSVsESM'));
const PackageJsonAndScripts = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages/PackageJsonAndScripts'));
const Lockfiles = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages/Lockfiles'));
const NodeModulesAndResolution = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages/NodeModulesAndResolution'));

const ModulesAndPackages: RouteObject[] = [
  {
    path: '/backend/frameworks/nodejs/basics/modules-packages/commonjs-vs-esm',
    element: <CommonJSVsESM />,
  },
  {
    path: '/backend/frameworks/nodejs/basics/modules-packages/package-json-scripts',
    element: <PackageJsonAndScripts />,
  },
  {
    path: '/backend/frameworks/nodejs/basics/modules-packages/lockfiles-npm',
    element: <Lockfiles />,
  },
  {
    path: '/backend/frameworks/nodejs/basics/modules-packages/node-modules-resolution',
    element: <NodeModulesAndResolution />,
  },
];

export default ModulesAndPackages;
