import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AvoidingReRenders = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/Performance/AvoidingReRenders'));
const BatchingAndSubscriptions = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/Performance/BatchingAndSubscriptions'));
const ImmutableUpdatesAtScale = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/Performance/ImmutableUpdatesAtScale'));

const Performance: RouteObject[] = [
  {
    path: '/redux/advanced/performance/avoiding-re-renders',
    element: <AvoidingReRenders />,
  },
  {
    path: '/redux/advanced/performance/batching-and-subscriptions',
    element: <BatchingAndSubscriptions />,
  },
  {
    path: '/redux/advanced/performance/immutable-updates-at-scale',
    element: <ImmutableUpdatesAtScale />,
  },
];

export default Performance;
