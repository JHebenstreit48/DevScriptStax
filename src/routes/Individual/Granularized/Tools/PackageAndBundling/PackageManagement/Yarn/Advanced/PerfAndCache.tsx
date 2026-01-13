import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OfflineCache = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/PerfAndCache/OfflineCache'));
const SelectiveInstalls = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/PerfAndCache/SelectiveInstalls'));

const PerfAndCache: RouteObject[] = [
  {
    path: '/tools/package-management/yarn/advanced/perf/offline-cache',
    element: <OfflineCache />,
  },
  {
    path: '/tools/package-management/yarn/advanced/perf/selective-installs',
    element: <SelectiveInstalls />,
  },
];

export default PerfAndCache;
