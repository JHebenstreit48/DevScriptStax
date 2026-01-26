import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroductionToCircleCI = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Basics/Fundamentals/IntroductionToCircleCI'));
const KeyConcepts = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Basics/Fundamentals/KeyConcepts'));

const Fundamentals: RouteObject[] = [
  {
    path: '/ci-cd/circle-ci/basics/fundamentals/introduction',
    element: <IntroductionToCircleCI />,
  },
  {
    path: '/ci-cd/circle-ci/basics/fundamentals/concepts',
    element: <KeyConcepts />,
  },
];

export default Fundamentals;
