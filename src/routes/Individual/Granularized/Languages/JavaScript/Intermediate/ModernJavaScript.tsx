import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ES6FeaturesOverview = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Intermediate/ModernJavaScript/ES6FeaturesOverview'));
const PromisesAndAsyncAwait = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Intermediate/ModernJavaScript/PromisesAndAsyncAwait'));

const ModernJavaScript: RouteObject[] = [
  {
    path: '/javascript/intermediate/es6/features',
    element: <ES6FeaturesOverview />,
  },
  {
    path: '/javascript/intermediate/es6/promises-and-async',
    element: <PromisesAndAsyncAwait />,
  },
];

export default ModernJavaScript;
