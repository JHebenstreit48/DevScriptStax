import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PathAliases = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Advanced/TypeScriptIntegration/PathAliases')
);

const AdvancedAliases = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Advanced/TypeScriptIntegration/AdvancedAliases')
);

const tsIntegration: RouteObject[] = [
  {
    path: '/front-end/angular/advanced/ts-integration/path-aliases',
    element: <PathAliases />,
  },
  {
    path: '/front-end/angular/advanced/ts-integration/advanced-aliases',
    element: <AdvancedAliases />,
  },
];

export default tsIntegration;