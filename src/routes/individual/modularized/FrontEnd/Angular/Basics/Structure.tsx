import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProjectStructure = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/Structure/ProjectStructure')
);
const ConfigFiles = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/Structure/ConfigurationFiles')
);
const NamingConventions = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/Structure/NamingConventions')
);

const Structure: RouteObject[] = [
  {
    path: '/front-end/angular/basics/structure/project-structure',
    element: <ProjectStructure />,
  },
  {
    path: '/front-end/angular/basics/structure/config-files',
    element: <ConfigFiles />,
  },
  {
    path: '/front-end/angular/basics/structure/naming-conventions',
    element: <NamingConventions />,
  },
];

export default Structure;