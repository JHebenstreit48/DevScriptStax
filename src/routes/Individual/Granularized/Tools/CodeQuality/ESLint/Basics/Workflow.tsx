import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FixAndIgnore = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/Workflow/FixAndIgnore'));
const ESLintPrettier = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/Workflow/ESLintPrettier'));

const Workflow: RouteObject[] = [
  {
    path: '/eslint/basics/workflow/fix-ignore',
    element: <FixAndIgnore />,
  },
  {
    path: '/eslint/basics/workflow/eslint-prettier',
    element: <ESLintPrettier />,
  },
];

export default Workflow;
