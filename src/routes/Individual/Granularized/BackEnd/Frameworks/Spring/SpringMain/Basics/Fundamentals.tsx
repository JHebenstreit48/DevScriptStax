import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/Introduction'));
const IoCContainerAndBeans = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/IoCContainerAndBeans'));
const Config = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/Config'));
const ComponentScan = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/ComponentScan'));

const Fundamentals: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-main/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/backend/frameworks/spring/spring-main/basics/fundamentals/ioc-beans',
    element: <IoCContainerAndBeans />,
  },
  {
    path: '/backend/frameworks/spring/spring-main/basics/fundamentals/config-javaconfig-xml',
    element: <Config />,
  },
  {
    path: '/backend/frameworks/spring/spring-main/basics/fundamentals/component-scan',
    element: <ComponentScan />,
  },
];

export default Fundamentals;
