import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroductionToJenkins = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Fundamentals/IntroductionToJenkins'));
const KeyConcepts = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Fundamentals/KeyConcepts'));

const Fundamentals: RouteObject[] = [
  {
    path: '/tools/cicd/jenkins/basics/fundamentals/intro',
    element: <IntroductionToJenkins />,
  },
  {
    path: '/tools/cicd/jenkins/basics/fundamentals/concepts',
    element: <KeyConcepts />,
  },
];

export default Fundamentals;
