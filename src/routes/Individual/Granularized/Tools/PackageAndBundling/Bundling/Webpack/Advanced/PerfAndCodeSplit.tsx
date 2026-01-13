import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CachingAndMinify = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Advanced/PerfAndCodeSplit/CachingAndMinify'));
const CodeSplitting = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Advanced/PerfAndCodeSplit/CodeSplitting'));

const PerfAndCodeSplit: RouteObject[] = [
  {
    path: '/tools/bundling/webpack/advanced/perf/caching-minify',
    element: <CachingAndMinify />,
  },
  {
    path: '/tools/bundling/webpack/advanced/perf/code-splitting',
    element: <CodeSplitting />,
  },
];

export default PerfAndCodeSplit;
