import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EntryAndOutput = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/PackageAndBundling/Bundling/Webpack/Basics/CoreBuild/EntryAndOutput'));
const Loaders = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/PackageAndBundling/Bundling/Webpack/Basics/CoreBuild/Loaders'));

const CoreBuild: RouteObject[] = [
  {
    path: '/tools/bundling/webpack/basics/core/entry-output',
    element: <EntryAndOutput />,
  },
  {
    path: '/tools/bundling/webpack/basics/core/loaders',
    element: <Loaders />,
  },
];

export default CoreBuild;
