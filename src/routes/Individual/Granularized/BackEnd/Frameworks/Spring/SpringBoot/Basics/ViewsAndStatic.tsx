import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Thymeleaf = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/ViewsAndStatic/Thymeleaf'));
const StaticFiles = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/ViewsAndStatic/StaticFiles'));

const ViewsAndStatic: RouteObject[] = [
  {
    path: '/frameworks/spring/spring-boot/basics/views-static/thymeleaf',
    element: <Thymeleaf />,
  },
  {
    path: '/frameworks/spring/spring-boot/basics/views-static/static-files',
    element: <StaticFiles />,
  },
];

export default ViewsAndStatic;
