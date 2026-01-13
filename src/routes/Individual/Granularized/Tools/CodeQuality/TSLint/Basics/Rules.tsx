import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreRules = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Basics/Rules/CoreRules'));
const SeverityAndOptions = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Basics/Rules/SeverityAndOptions'));

const Rules: RouteObject[] = [
  {
    path: '/tslint/basics/rules/core-rules',
    element: <CoreRules />,
  },
  {
    path: '/tslint/basics/rules/severity-options',
    element: <SeverityAndOptions />,
  },
];

export default Rules;
