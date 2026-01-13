import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TypeScriptConfig = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/Frameworks/TypeScriptConfig'));
const ReactConfig = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/Frameworks/ReactConfig'));

const Frameworks: RouteObject[] = [
  {
    path: '/eslint/basics/frameworks/typescript-config',
    element: <TypeScriptConfig />,
  },
  {
    path: '/eslint/basics/frameworks/react-config',
    element: <ReactConfig />,
  },
];

export default Frameworks;
