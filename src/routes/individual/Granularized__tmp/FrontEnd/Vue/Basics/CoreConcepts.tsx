import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Reactivity = lazy(() => import('@/pages/mainTabs/FrontEnd/Vue/Basics/CoreConcepts/Reactivity'));
const Directives = lazy(() => import('@/pages/mainTabs/FrontEnd/Vue/Basics/CoreConcepts/Directives'));
const Routing = lazy(() => import('@/pages/mainTabs/FrontEnd/Vue/Basics/CoreConcepts/Routing'));
const StateManagement = lazy(() => import('@/pages/mainTabs/FrontEnd/Vue/Basics/CoreConcepts/StateManagement'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/vue/basics/core/reactivity',
    element: <Reactivity />,
  },
  {
    path: '/vue/basics/core/directives',
    element: <Directives />,
  },
  {
    path: '/vue/core/routing',
    element: <Routing />,
  },
  {
    path: '/vue/core/state-management',
    element: <StateManagement />,
  },
];

export default CoreConcepts;
