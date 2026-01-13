import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Packaging = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Production/Packaging'));
const GracefulShutdown = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Production/GracefulShutdown'));

const Production: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/production/packaging-jar-war',
    element: <Packaging />,
  },
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/production/graceful-shutdown',
    element: <GracefulShutdown />,
  },
];

export default Production;
