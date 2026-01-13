import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Fundamentals/Overview'));
const FirebaseVsTraditional = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Fundamentals/FirebaseVsTraditional'));
const UseCasesForFirebase = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Fundamentals/UseCasesForFirebase'));
const ProjectSetup = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Fundamentals/ProjectSetup'));

const Fundamentals: RouteObject[] = [
  {
    path: '/firebase/basics/fundamentals/overview',
    element: <Overview />,
  },
  {
    path: '/firebase/basics/fundamentals/comparison',
    element: <FirebaseVsTraditional />,
  },
  {
    path: '/firebase/basics/fundamentals/use-cases',
    element: <UseCasesForFirebase />,
  },
  {
    path: '/firebase/basics/fundamentals/setup',
    element: <ProjectSetup />,
  },
];

export default Fundamentals;
