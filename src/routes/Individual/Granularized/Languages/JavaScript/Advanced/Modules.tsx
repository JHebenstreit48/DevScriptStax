import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/Modules/Overview'));
const ImportExportSyntax = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/Modules/Syntax'));
const DynamicImports = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/Modules/DynamicImports'));
const PathsAndAliases = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/Modules/PathsAndAliases'));

const Modules: RouteObject[] = [
  {
    path: '/javascript/advanced/modules/overview',
    element: <Overview />,
  },
  {
    path: '/javascript/advanced/modules/syntax',
    element: <ImportExportSyntax />,
  },
  {
    path: '/javascript/advanced/modules/dynamic',
    element: <DynamicImports />,
  },
  {
    path: '/javascript/advanced/modules/paths',
    element: <PathsAndAliases />,
  },
];

export default Modules;
