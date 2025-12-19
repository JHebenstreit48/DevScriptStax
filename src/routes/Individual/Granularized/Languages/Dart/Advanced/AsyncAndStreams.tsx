import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FuturesAndAwait = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/AsyncAndStreams/FuturesAndAwait'));
const Streams = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/AsyncAndStreams/Streams'));

const AsyncAndStreams: RouteObject[] = [
  {
    path: '/dart/advanced/async/futures-await',
    element: <FuturesAndAwait />,
  },
  {
    path: '/dart/advanced/async/streams',
    element: <Streams />,
  },
];

export default AsyncAndStreams;
