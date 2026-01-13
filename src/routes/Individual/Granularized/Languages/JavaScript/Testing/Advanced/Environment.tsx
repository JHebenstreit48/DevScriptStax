import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TimeAndRandomnessControl = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Advanced/Environment/TimeAndRandomnessControl'));
const NetworkStrategies = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Advanced/Environment/NetworkStrategies'));

const Environment: RouteObject[] = [
  {
    path: '/javascript/testing/advanced/environment/time-and-randomness-control',
    element: <TimeAndRandomnessControl />,
  },
  {
    path: '/javascript/testing/advanced/environment/network-strategies',
    element: <NetworkStrategies />,
  },
];

export default Environment;
