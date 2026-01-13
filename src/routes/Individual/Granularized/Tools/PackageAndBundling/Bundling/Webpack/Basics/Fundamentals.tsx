import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WhatIsWebpack = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Basics/Fundamentals/WhatIsWebpack'));
const KeyConcepts = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Basics/Fundamentals/KeyConcepts'));

const Fundamentals: RouteObject[] = [
  {
    path: '/tools/bundling/webpack/basics/fundamentals/intro',
    element: <WhatIsWebpack />,
  },
  {
    path: '/tools/bundling/webpack/basics/fundamentals/concepts',
    element: <KeyConcepts />,
  },
];

export default Fundamentals;
