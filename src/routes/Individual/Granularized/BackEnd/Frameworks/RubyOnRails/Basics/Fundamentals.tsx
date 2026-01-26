import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Intro = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/Fundamentals/Intro'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/Fundamentals/InstallAndSetup'));
const ProjectStructure = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/Fundamentals/ProjectStructure'));
const MVC = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/Fundamentals/MVC'));

const Fundamentals: RouteObject[] = [
  {
    path: '/frameworks/ruby-on-rails/basics/fundamentals/intro',
    element: <Intro />,
  },
  {
    path: '/frameworks/ruby-on-rails/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/frameworks/ruby-on-rails/basics/fundamentals/project-structure',
    element: <ProjectStructure />,
  },
  {
    path: '/frameworks/ruby-on-rails/basics/fundamentals/mvc',
    element: <MVC />,
  },
];

export default Fundamentals;
