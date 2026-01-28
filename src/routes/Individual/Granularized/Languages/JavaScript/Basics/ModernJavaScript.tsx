import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FeaturesIntroduction = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/ModernES6/FeaturesIntroduction'));
const PromisesAndAsyncAwait = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/ModernES6/PromisesAndAsyncAwait'));

const ModernJavaScript: RouteObject[] = [
  {
    path: '/javascript/basics/es6/features-introduction',
    element: <FeaturesIntroduction />,
  },
  {
    path: '/javascript/basics/es6/promises-and-async',
    element: <PromisesAndAsyncAwait />,
  },
];

export default ModernJavaScript;