import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PointcutsAndProxies = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/AOPAdvanced/PointcutsAndProxies'));
const TxAOP = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/AOPAdvanced/TxAOP'));

const AOPAdvanced: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-main/advanced/aop-advanced/pointcuts-proxies',
    element: <PointcutsAndProxies />,
  },
  {
    path: '/backend/frameworks/spring/spring-main/advanced/aop-advanced/transaction-aop',
    element: <TxAOP />,
  },
];

export default AOPAdvanced;
