import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SymlinkedStructure = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/NodeModulesLayout/SymlinkedStructure'));
const HoistingOptions = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/NodeModulesLayout/HoistingOptions'));

const NodeModulesLayout: RouteObject[] = [
  {
    path: '/tools/package-management/pnpm/advanced/node-modules/symlinked-structure',
    element: <SymlinkedStructure />,
  },
  {
    path: '/tools/package-management/pnpm/advanced/node-modules/hoisting',
    element: <HoistingOptions />,
  },
];

export default NodeModulesLayout;
