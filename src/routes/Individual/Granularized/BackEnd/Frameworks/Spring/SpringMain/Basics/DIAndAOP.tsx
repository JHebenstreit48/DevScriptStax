import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DependencyInjection = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Basics/DIAndAOP/DependencyInjection'));
const AOPBasics = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Basics/DIAndAOP/AOPBasics'));

const DIAndAOP: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-main/basics/di-aop/dependency-injection',
    element: <DependencyInjection />,
  },
  {
    path: '/backend/frameworks/spring/spring-main/basics/di-aop/aop-basics',
    element: <AOPBasics />,
  },
];

export default DIAndAOP;
