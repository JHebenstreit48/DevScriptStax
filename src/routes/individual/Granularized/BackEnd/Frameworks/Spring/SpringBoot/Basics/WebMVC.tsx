import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Controllers = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/WebMVC/Controllers'));
const RoutingAndParams = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/WebMVC/RoutingAndParams'));
const ValidationAndBinding = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/WebMVC/ValidationAndBinding'));

const WebMVC: RouteObject[] = [
  {
    path: '/frameworks/spring/spring-boot/basics/web-mvc/controllers',
    element: <Controllers />,
  },
  {
    path: '/frameworks/spring/spring-boot/basics/web-mvc/routing-params',
    element: <RoutingAndParams />,
  },
  {
    path: '/frameworks/spring/spring-boot/basics/web-mvc/validation-binding',
    element: <ValidationAndBinding />,
  },
];

export default WebMVC;
