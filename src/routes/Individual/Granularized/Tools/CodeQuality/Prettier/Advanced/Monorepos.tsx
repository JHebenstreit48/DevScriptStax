import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RootConfig = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/Monorepos/RootConfig'));
const ProjectOverrides = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/Monorepos/ProjectOverrides'));

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
