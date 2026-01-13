import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RESTInSpring = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/API/RESTInSpring'));
const ExceptionHandling = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/API/ExceptionHandling'));

const API: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/api-spring/rest-in-spring',
    element: <RESTInSpring />,
  },
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/api-spring/exception-handling',
    element: <ExceptionHandling />,
  },
];

export default API;
