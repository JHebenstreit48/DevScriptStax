import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RootConfig = lazy(() => import('@/pages/mainTabs/Tools/CodeQuality/Prettier/Advanced/Monorepos/RootConfig'));
const ProjectOverrides = lazy(() => import('@/pages/mainTabs/Tools/CodeQuality/Prettier/Advanced/Monorepos/ProjectOverrides'));

const Monorepos: RouteObject[] = [
  {
    path: '/prettier/advanced/monorepos/root-config',
    element: <RootConfig />,
  },
  {
    path: '/prettier/advanced/monorepos/project-overrides',
    element: <ProjectOverrides />,
  },
];

export default Monorepos;
