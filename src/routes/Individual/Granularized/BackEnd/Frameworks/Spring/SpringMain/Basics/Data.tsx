import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JDBCTemplate = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Basics/Data/JDBCTemplate'));
const Transactions = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Basics/Data/Transactions'));

const Data: RouteObject[] = [
  {
    path: '/frameworks/spring/spring-main/basics/data-core/jdbc-template',
    element: <JDBCTemplate />,
  },
  {
    path: '/frameworks/spring/spring-main/basics/data-core/transactions',
    element: <Transactions />,
  },
];

export default Data;
