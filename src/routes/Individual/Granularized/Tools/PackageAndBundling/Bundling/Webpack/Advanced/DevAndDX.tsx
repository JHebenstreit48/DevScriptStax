import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DevServerAndHMR = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Advanced/DevAndDX/DevServerAndHMR'));
const SourceMaps = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Advanced/DevAndDX/SourceMaps'));

const DevAndDX: RouteObject[] = [
  {
    path: '/tools/bundling/webpack/advanced/dev/hmr',
    element: <DevServerAndHMR />,
  },
  {
    path: '/tools/bundling/webpack/advanced/dev/source-maps',
    element: <SourceMaps />,
  },
];

export default DevAndDX;
