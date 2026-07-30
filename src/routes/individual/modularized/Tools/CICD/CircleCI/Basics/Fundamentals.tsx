import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroductionToCircleCI = lazy(() => import('@/pages/mainTabs/Tools/CICD/CircleCI/Basics/Fundamentals/Introduction'));
const KeyConcepts = lazy(() => import('@/pages/mainTabs/Tools/CICD/CircleCI/Basics/Fundamentals/KeyConcepts'));

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
