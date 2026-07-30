import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AsyncAwait = lazy(() => import('@/pages/mainTabs/Languages/Rust/Advanced/AsyncAndConcurrency/AsyncAwait'));
const ThreadsAndChannels = lazy(() => import('@/pages/mainTabs/Languages/Rust/Advanced/AsyncAndConcurrency/ThreadsAndChannels'));
const TokioBasics = lazy(() => import('@/pages/mainTabs/Languages/Rust/Advanced/AsyncAndConcurrency/TokioBasics'));

const AsyncAndConcurrency: RouteObject[] = [
  {
    path: '/languages/rust/advanced/async-concurrency/async-await',
    element: <AsyncAwait />,
  },
  {
    path: '/languages/rust/advanced/async-concurrency/threads-channels',
    element: <ThreadsAndChannels />,
  },
  {
    path: '/languages/rust/advanced/async-concurrency/tokio-basics',
    element: <TokioBasics />,
  },
];

export default AsyncAndConcurrency;
