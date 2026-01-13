import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroToWorkspaces = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Workspaces/IntroToWorkspaces'));
const MonorepoSetup = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Workspaces/MonorepoSetup'));

const Workspaces: RouteObject[] = [
  {
    path: '/tools/package-management/yarn/basics/workspaces/intro',
    element: <IntroToWorkspaces />,
  },
  {
    path: '/tools/package-management/yarn/basics/workspaces/monorepo-setup',
    element: <MonorepoSetup />,
  },
];

export default Workspaces;
