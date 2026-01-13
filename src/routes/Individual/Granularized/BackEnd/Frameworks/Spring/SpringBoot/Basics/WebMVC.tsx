import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Controllers = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/WebMVC/Controllers'));
const RoutingAndParams = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/WebMVC/RoutingAndParams'));
const ValidationAndBinding = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/WebMVC/ValidationAndBinding'));

const WebMVC: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-boot/basics/web-mvc/controllers',
    element: <Controllers />,
  },
  {
    path: '/backend/frameworks/spring/spring-boot/basics/web-mvc/routing-params',
    element: <RoutingAndParams />,
  },
  {
    path: '/backend/frameworks/spring/spring-boot/basics/web-mvc/validation-binding',
    element: <ValidationAndBinding />,
  },
];

export default WebMVC;
