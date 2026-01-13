import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TreeShaking = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Advanced/AdvancedConcepts/TreeShaking'));
const ModuleFederation = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Advanced/AdvancedConcepts/ModuleFederation'));

const AdvancedConcepts: RouteObject[] = [
  {
    path: '/tools/bundling/webpack/advanced/concepts/tree-shaking',
    element: <TreeShaking />,
  },
  {
    path: '/tools/bundling/webpack/advanced/concepts/module-federation',
    element: <ModuleFederation />,
  },
];

export default AdvancedConcepts;
