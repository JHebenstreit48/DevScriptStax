import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ReduxPersist = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/PersistenceAndSync/ReduxPersist'));
const CrossTabSync = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/PersistenceAndSync/CrossTabSync'));

const PersistenceAndSync: RouteObject[] = [
  {
    path: '/redux/advanced/persistence-sync/redux-persist',
    element: <ReduxPersist />,
  },
  {
    path: '/redux/advanced/persistence-sync/cross-tab-sync',
    element: <CrossTabSync />,
  },
];

export default PersistenceAndSync;
