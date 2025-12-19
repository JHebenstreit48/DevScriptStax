import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OptimizeAndPurgeCSS = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Performance/OptimizeAndPurgeCSS'));
const ModularImports = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Performance/ModularImports'));

const Performance: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/advanced/performance/optimize-and-purgecss',
    element: <OptimizeAndPurgeCSS />,
  },
  {
    path: '/frameworks/bootstrap/advanced/performance/modular-imports',
    element: <ModularImports />,
  },
];

export default Performance;
