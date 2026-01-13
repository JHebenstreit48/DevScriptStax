import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroductionToCircleCI = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Basics/Fundamentals/IntroductionToCircleCI'));
const KeyConcepts = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Basics/Fundamentals/KeyConcepts'));

const Fundamentals: RouteObject[] = [
  {
    path: '/tools/cicd/circleci/basics/fundamentals/intro',
    element: <IntroductionToCircleCI />,
  },
  {
    path: '/tools/cicd/circleci/basics/fundamentals/concepts',
    element: <KeyConcepts />,
  },
];

export default Fundamentals;
