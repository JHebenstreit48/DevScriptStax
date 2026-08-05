import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MonoreposAndWorkspaces = lazy(() => import('@/pages/mainTabs/BackEnd/Stacks/MERN/Advanced/Architecture/MonoreposAndWorkspaces'));
const SharedPackages = lazy(() => import('@/pages/mainTabs/BackEnd/Stacks/MERN/Advanced/Architecture/SharedPackages'));

const Architecture: RouteObject[] = [
  {
    path: '/mern/advanced/architecture/monorepos-and-workspaces',
    element: <MonoreposAndWorkspaces />,
  },
  {
    path: '/mern/advanced/architecture/shared-packages',
    element: <SharedPackages />,
  },
];

export default Architecture;
