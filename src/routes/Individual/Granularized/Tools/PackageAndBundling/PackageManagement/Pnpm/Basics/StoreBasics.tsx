import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GlobalStore = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/StoreBasics/GlobalStore'));
const PruneAndClean = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/StoreBasics/PruneAndClean'));

const StoreBasics: RouteObject[] = [
  {
    path: '/tools/package-management/pnpm/basics/store/global-store',
    element: <GlobalStore />,
  },
  {
    path: '/tools/package-management/pnpm/basics/store/prune-clean',
    element: <PruneAndClean />,
  },
];

export default StoreBasics;
