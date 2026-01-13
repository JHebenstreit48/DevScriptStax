import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroToYarn = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Fundamentals/IntroToYarn'));
const KeyConcepts = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Fundamentals/KeyConcepts'));

const Fundamentals: RouteObject[] = [
  {
    path: '/tools/package-management/yarn/basics/fundamentals/intro',
    element: <IntroToYarn />,
  },
  {
    path: '/tools/package-management/yarn/basics/fundamentals/concepts',
    element: <KeyConcepts />,
  },
];

export default Fundamentals;
