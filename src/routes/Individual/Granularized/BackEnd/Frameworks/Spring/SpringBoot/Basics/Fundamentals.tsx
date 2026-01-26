import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Intro = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/Fundamentals/Intro'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/Fundamentals/InstallAndSetup'));
const ProjectStructure = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/Fundamentals/ProjectStructure'));
const StartersAndAutoConfig = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/Fundamentals/StartersAndAutoConfig'));

const Fundamentals: RouteObject[] = [
  {
    path: '/frameworks/spring/spring-boot/basics/fundamentals/intro',
    element: <Intro />,
  },
  {
    path: '/frameworks/spring/spring-boot/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/frameworks/spring/spring-boot/basics/fundamentals/project-structure',
    element: <ProjectStructure />,
  },
  {
    path: '/frameworks/spring/spring-boot/basics/fundamentals/starters-auto-config',
    element: <StartersAndAutoConfig />,
  },
];

export default Fundamentals;
