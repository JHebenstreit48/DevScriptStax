import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Multithreading = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Concurrency/Multithreading'));
const Multiprocessing = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Concurrency/Multiprocessing'));
const AsyncioPatterns = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Concurrency/AsyncioPatterns'));

const Concurrency: RouteObject[] = [
  {
    path: '/python/advanced/concurrency/multithreading',
    element: <Multithreading />,
  },
  {
    path: '/python/advanced/concurrency/multiprocessing',
    element: <Multiprocessing />,
  },
  {
    path: '/python/advanced/concurrency/asyncio-patterns',
    element: <AsyncioPatterns />,
  },
];

export default Concurrency;
