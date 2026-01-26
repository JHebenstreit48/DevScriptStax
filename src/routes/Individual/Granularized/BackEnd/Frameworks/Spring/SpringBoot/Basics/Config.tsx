import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PropertiesAndYAML = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/Config/PropertiesAndYAML'));
const Profiles = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/Config/Profiles'));
const ExternalConfigAndEnv = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Basics/Config/ExternalConfigAndEnv'));

const Config: RouteObject[] = [
  {
    path: '/frameworks/spring/spring-boot/basics/config/properties-yaml',
    element: <PropertiesAndYAML />,
  },
  {
    path: '/frameworks/spring/spring-boot/basics/config/profiles',
    element: <Profiles />,
  },
  {
    path: '/frameworks/spring/spring-boot/basics/config/external-config-env',
    element: <ExternalConfigAndEnv />,
  },
];

export default Config;
