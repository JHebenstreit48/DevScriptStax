import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ConfigFormats = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/ConfigBasics/ConfigFormats'));
const UnderstandingRules = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/ConfigBasics/UnderstandingRules'));

const ConfigBasics: RouteObject[] = [
  {
    path: '/eslint/basics/config-basics/config-formats',
    element: <ConfigFormats />,
  },
  {
    path: '/eslint/basics/config-basics/understanding-rules',
    element: <UnderstandingRules />,
  },
];

export default ConfigBasics;
