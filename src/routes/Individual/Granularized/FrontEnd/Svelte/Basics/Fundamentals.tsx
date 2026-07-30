import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Basics/Fundamentals/Introduction'));
const Setup = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Basics/Fundamentals/Setup'));
const Reactivity = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Basics/Fundamentals/Reactivity'));
const Components = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Basics/Fundamentals/Components'));

const Fundamentals: RouteObject[] = [
  {
    path: '/svelte/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/svelte/basics/fundamentals/setup',
    element: <Setup />,
  },
  {
    path: '/svelte/basics/fundamentals/reactivity',
    element: <Reactivity />,
  },
  {
    path: '/svelte/basics/fundamentals/components',
    element: <Components />,
  },
];

export default Fundamentals;
