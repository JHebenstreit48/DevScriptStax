import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Functions/Basics'));
const ExpressionsAndIIFE = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Functions/ExpressionsIIFE'));
const Arrow = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Functions/Arrow'));
const ParametersAndArguments = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Functions/ParamsAndArgs'));
const HigherOrder = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Functions/HigherOrder'));
const ThisKeyword = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Functions/ThisKeyword'));

const Functions: RouteObject[] = [
  {
    path: '/javascript/basics/functions/basics-and-declarations',
    element: <Basics />,
  },
  {
    path: '/javascript/basics/functions/expressions-and-iife',
    element: <ExpressionsAndIIFE />,
  },
  {
    path: '/javascript/basics/functions/arrow-functions',
    element: <Arrow />,
  },
  {
    path: '/javascript/basics/functions/parameters-and-arguments',
    element: <ParametersAndArguments />,
  },
  {
    path: '/javascript/basics/functions/higher-order-functions',
    element: <HigherOrder />,
  },
  {
    path: '/javascript/basics/functions/this-keyword',
    element: <ThisKeyword />,
  }
];

export default Functions;