import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Transactions = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Data/Transactions'));
const PagingAndSpecs = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Data/PagingAndSpecs'));

const Data: RouteObject[] = [
  {
    path: '/frameworks/spring/spring-boot/advanced/data-advanced/transactions',
    element: <Transactions />,
  },
  {
    path: '/frameworks/spring/spring-boot/advanced/data-advanced/paging-specifications',
    element: <PagingAndSpecs />,
  },
];

export default Data;
