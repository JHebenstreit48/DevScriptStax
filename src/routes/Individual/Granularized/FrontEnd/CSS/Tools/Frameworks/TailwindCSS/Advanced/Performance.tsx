import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TreeShakeAndSafelist = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Performance/TreeShakeAndSafelist'));
const DynamicClassPatterns = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Performance/DynamicClassPatterns'));

const Performance: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/advanced/performance/tree-shake-and-safelist',
    element: <TreeShakeAndSafelist />,
  },
  {
    path: '/css/tools/frameworks/tailwind/advanced/performance/dynamic-class-patterns',
    element: <DynamicClassPatterns />,
  },
];

export default Performance;
