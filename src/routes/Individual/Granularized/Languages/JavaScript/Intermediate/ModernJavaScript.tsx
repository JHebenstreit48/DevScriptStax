import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FeaturesOverview = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Intermediate/ModernES6/FeaturesOverview'));
const PromisesAndAsyncAwait = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Intermediate/ModernES6/PromisesAndAsyncAwait'));

const ModernJavaScript: RouteObject[] = [
  {
    path: '/javascript/intermediate/es6/features',
    element: <FeaturesOverview />,
  },
  {
    path: '/javascript/intermediate/es6/promises-and-async',
    element: <PromisesAndAsyncAwait />,
  },
];

export default ModernJavaScript;
