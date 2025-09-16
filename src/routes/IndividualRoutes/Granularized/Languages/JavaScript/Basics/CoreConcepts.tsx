import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SyntaxStructure = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/CoreConcepts/SyntaxAndStructure'));
const JSVariables = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/CoreConcepts/Variables'));
const Operators = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/CoreConcepts/Operators'));
const BuiltInMethods = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/CoreConcepts/BuiltInMethods'));
const Conditionals = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/CoreConcepts/Conditionals'));
const Loops = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/CoreConcepts/Loops'));
const ScopeAndContext = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/CoreConcepts/ScopeAndContext'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/javascript/basics/core/syntax',
    element: <SyntaxStructure />,
  },
  {
    path: '/javascript/basics/core/variables',
    element: <JSVariables />,
  },
  {
    path: '/javascript/basics/core/operators',
    element: <Operators />,
  },
  {
    path: '/javascript/basics/core/methods',
    element: <BuiltInMethods />,
  },
  {
    path: '/javascript/basics/core/conditionals',
    element: <Conditionals />,
  },
  {
    path: '/javascript/basics/core/loops',
    element: <Loops />,
  },
  {
    path: '/javascript/basics/core/scope-and-context',
    element: <ScopeAndContext />,
  },
];

export default CoreConcepts;