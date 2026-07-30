import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Multithreading = lazy(() => import('@/pages/mainTabs/Languages/Python/Advanced/Concurrency/Multithreading'));
const Multiprocessing = lazy(() => import('@/pages/mainTabs/Languages/Python/Advanced/Concurrency/Multiprocessing'));
const AsyncioPatterns = lazy(() => import('@/pages/mainTabs/Languages/Python/Advanced/Concurrency/AsyncioPatterns'));

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
