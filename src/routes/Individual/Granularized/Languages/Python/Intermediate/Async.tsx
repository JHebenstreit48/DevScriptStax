import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AsyncAwait = lazy(() => import('@/Pages/MainTabs/Languages/Python/Intermediate/Async/AsyncAwait'));
const Asyncio = lazy(() => import('@/Pages/MainTabs/Languages/Python/Intermediate/Async/Asyncio'));

const Async: RouteObject[] = [
  {
    path: '/python/intermediate/async/asyncawait',
    element: <AsyncAwait />,
  },
  {
    path: '/python/intermediate/async/asyncio',
    element: <Asyncio />,
  },
];

export default Async;
