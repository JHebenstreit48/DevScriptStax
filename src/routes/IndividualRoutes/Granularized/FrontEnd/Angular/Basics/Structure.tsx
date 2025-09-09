import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProjectStructure = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/Structure/ProjectStructure')
);
const ConfigFiles = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/Structure/ConfigurationFiles')
);
const NamingConventions = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/Structure/NamingConventions')
);

const Structure: RouteObject[] = [
  {
    path: '/angular/basics/structure/structure',
    element: <ProjectStructure />,
  },
  {
    path: '/angular/basics/structure/config-files',
    element: <ConfigFiles />,
  },
  {
    path: '/angular/basics/structure/naming-conventions',
    element: <NamingConventions />,
  },
];

export default Structure;