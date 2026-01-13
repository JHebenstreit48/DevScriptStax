import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ESLintIntegration = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/Integrations/ESLintIntegration'));
const HuskyAndLintStaged = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/Integrations/HuskyAndLintStaged'));

const Integrations: RouteObject[] = [
  {
    path: '/prettier/advanced/integrations/eslint-integration',
    element: <ESLintIntegration />,
  },
  {
    path: '/prettier/advanced/integrations/husky-lint-staged',
    element: <HuskyAndLintStaged />,
  },
];

export default Integrations;
