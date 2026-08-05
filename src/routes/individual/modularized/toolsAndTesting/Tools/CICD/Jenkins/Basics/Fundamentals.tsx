import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroductionToJenkins = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CICD/Jenkins/Basics/Fundamentals/IntroductionToJenkins'));
const KeyConcepts = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CICD/Jenkins/Basics/Fundamentals/KeyConcepts'));

const Fundamentals: RouteObject[] = [
  {
    path: '/ci-cd/jenkins/basics/fundamentals/intro',
    element: <IntroductionToJenkins />,
  },
  {
    path: '/ci-cd/jenkins/basics/fundamentals/concepts',
    element: <KeyConcepts />,
  },
];

export default Fundamentals;
