import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ReadWriteConcernsAndPreferences = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/ConsistencyDurabilityAndTransactions/ReadWriteConcernsAndPreferences'));
const SessionsAndRetryableWrites = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/ConsistencyDurabilityAndTransactions/SessionsAndRetryableWrites'));
const Transactions = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/ConsistencyDurabilityAndTransactions/Transactions'));

const ConsistencyDurabilityAndTransactions: RouteObject[] = [
  {
    path: '/mongodb/advanced/consistency/concerns',
    element: <ReadWriteConcernsAndPreferences />,
  },
  {
    path: '/mongodb/advanced/consistency/sessions',
    element: <SessionsAndRetryableWrites />,
  },
  {
    path: '/mongodb/advanced/consistency/transactions',
    element: <Transactions />,
  },
];

export default ConsistencyDurabilityAndTransactions;
