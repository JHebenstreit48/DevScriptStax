import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VariablesAndTypes = lazy(() => import('@/Pages/MainTabs/Languages/Go/Basics/CoreConcepts/VariablesAndTypes'));
const StructsAndInterfaces = lazy(() => import('@/Pages/MainTabs/Languages/Go/Basics/CoreConcepts/StructsAndInterfaces'));
const ConcurrencyIntro = lazy(() => import('@/Pages/MainTabs/Languages/Go/Basics/CoreConcepts/ConcurrencyIntro'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/go/basics/core-concepts/variables-types',
    element: <VariablesAndTypes />,
  },
  {
    path: '/go/basics/core-concepts/structs-interfaces',
    element: <StructsAndInterfaces />,
  },
  {
    path: '/go/basics/core-concepts/concurrency-intro',
    element: <ConcurrencyIntro />,
  },
];

export default CoreConcepts;
