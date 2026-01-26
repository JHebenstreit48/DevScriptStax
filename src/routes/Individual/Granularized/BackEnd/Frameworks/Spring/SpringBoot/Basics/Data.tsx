import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JPAAndEntities = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/Data/JPAAndEntities'));
const Repositories = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/Data/Repositories'));

const Data: RouteObject[] = [
  {
    path: '/frameworks/spring/spring-boot/basics/data-spring/jpa-entities',
    element: <JPAAndEntities />,
  },
  {
    path: '/frameworks/spring/spring-boot/basics/data-spring/repositories',
    element: <Repositories />,
  },
];

export default Data;
