import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommonPlugins = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Basics/Plugins/CommonPlugins'));
const HTMLAndAssets = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Basics/Plugins/HTMLAndAssets'));

const Plugins: RouteObject[] = [
  {
    path: '/tools/bundling/webpack/basics/plugins/common',
    element: <CommonPlugins />,
  },
  {
    path: '/tools/bundling/webpack/basics/plugins/html-assets',
    element: <HTMLAndAssets />,
  },
];

export default Plugins;
