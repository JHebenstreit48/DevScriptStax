import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroToPnpm = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/Fundamentals/IntroToPnpm'));
const WhyPnpm = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/Fundamentals/WhyPnpm'));

const Fundamentals: RouteObject[] = [
  {
    path: '/tools/package-management/pnpm/basics/fundamentals/intro',
    element: <IntroToPnpm />,
  },
  {
    path: '/tools/package-management/pnpm/basics/fundamentals/why-pnpm',
    element: <WhyPnpm />,
  },
];

export default Fundamentals;
