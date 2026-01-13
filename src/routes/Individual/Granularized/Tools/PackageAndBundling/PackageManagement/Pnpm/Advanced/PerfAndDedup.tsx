import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GlobalStorePerf = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/PerfAndDedup/GlobalStorePerf'));
const DeduplicateAndOverrides = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/PerfAndDedup/DeduplicateAndOverrides'));

const PerfAndDedup: RouteObject[] = [
  {
    path: '/tools/package-management/pnpm/advanced/perf/global-store',
    element: <GlobalStorePerf />,
  },
  {
    path: '/tools/package-management/pnpm/advanced/perf/dedupe-overrides',
    element: <DeduplicateAndOverrides />,
  },
];

export default PerfAndDedup;
