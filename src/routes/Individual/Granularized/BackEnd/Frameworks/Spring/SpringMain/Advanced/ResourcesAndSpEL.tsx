import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ResourceLoading = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/ResourcesAndSpEL/ResourceLoading'));
const SpEL = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/ResourcesAndSpEL/SpEL'));

const ResourcesAndSpEL: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-main/advanced/resources-spel/resource-loading',
    element: <ResourceLoading />,
  },
  {
    path: '/backend/frameworks/spring/spring-main/advanced/resources-spel/spel',
    element: <SpEL />,
  },
];

export default ResourcesAndSpEL;
