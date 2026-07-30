import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ThreadsAndFibers = lazy(() => import('@/pages/mainTabs/Languages/Ruby/Advanced/Concurrency/ThreadsAndFibers'));
const Ractors = lazy(() => import('@/pages/mainTabs/Languages/Ruby/Advanced/Concurrency/Ractors'));

const Concurrency: RouteObject[] = [
  {
    path: '/languages/ruby/advanced/concurrency/threads-fibers',
    element: <ThreadsAndFibers />,
  },
  {
    path: '/languages/ruby/advanced/concurrency/ractors',
    element: <Ractors />,
  },
];

export default Concurrency;
