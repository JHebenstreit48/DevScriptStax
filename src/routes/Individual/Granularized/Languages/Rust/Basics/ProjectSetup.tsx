import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CargoAndCrates = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/ProjectSetup/CargoAndCrates'));
const ModulesAndWorkspaces = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/ProjectSetup/ModulesAndWorkspaces'));

const ProjectSetup: RouteObject[] = [
  {
    path: '/languages/rust/basics/project-setup/cargo-crates',
    element: <CargoAndCrates />,
  },
  {
    path: '/languages/rust/basics/project-setup/modules-workspaces',
    element: <ModulesAndWorkspaces />,
  },
];

export default ProjectSetup;
