import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/Fundamentals/Overview'));
const DjangoVsOtherFrameworks = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/Fundamentals/DjangoVsOtherFrameworks'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/Fundamentals/InstallAndSetup'));
const ProjectStructure = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/Fundamentals/ProjectStructure'));

const Fundamentals: RouteObject[] = [
  {
    path: '/frameworks/django/basics/fundamentals/overview',
    element: <Overview />,
  },
  {
    path: '/frameworks/django/basics/fundamentals/comparison',
    element: <DjangoVsOtherFrameworks />,
  },
  {
    path: '/frameworks/django/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/frameworks/django/basics/fundamentals/project-structure',
    element: <ProjectStructure />,
  },
];

export default Fundamentals;
