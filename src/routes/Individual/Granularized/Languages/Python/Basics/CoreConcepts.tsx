import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VariablesAndTypes = lazy(() => import('@/Pages/MainTabs/Languages/Python/Basics/CoreConcepts/VariablesAndTypes'));
const FunctionsAndModules = lazy(() => import('@/Pages/MainTabs/Languages/Python/Basics/CoreConcepts/FunctionsAndModules'));
const OOP = lazy(() => import('@/Pages/MainTabs/Languages/Python/Basics/CoreConcepts/OOP'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/python/basics/core-concepts/variables-and-types',
    element: <VariablesAndTypes />,
  },
  {
    path: '/python/basics/core-concepts/functions-and-modules',
    element: <FunctionsAndModules />,
  },
  {
    path: '/python/basics/core-concepts/oop',
    element: <OOP />,
  },
];

export default CoreConcepts;
