import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ACIDAndMVCC = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Intermediate/TransactionsAndLocking/ACIDAndMVCC'));
const IsolationLevelsAndLocks = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Intermediate/TransactionsAndLocking/IsolationLevelsAndLocks'));

const TransactionsAndLocking: RouteObject[] = [
  {
    path: '/postgresql/intermediate/tx-locking/acid-mvcc',
    element: <ACIDAndMVCC />,
  },
  {
    path: '/postgresql/intermediate/tx-locking/isolation-locks',
    element: <IsolationLevelsAndLocks />,
  },
];

export default TransactionsAndLocking;
