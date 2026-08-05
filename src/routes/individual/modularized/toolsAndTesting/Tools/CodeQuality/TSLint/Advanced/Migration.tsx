import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TSLintVsESLint = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/TSLint/Advanced/Migration/TSLintVsESLint'));
const TslintToEslint = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/TSLint/Advanced/Migration/TslintToEslint'));

const Migration: RouteObject[] = [
  {
    path: '/tslint/advanced/migration/tslint-vs-eslint',
    element: <TSLintVsESLint />,
  },
  {
    path: '/tslint/advanced/migration/tslint-to-eslint',
    element: <TslintToEslint />,
  },
];

export default Migration;
