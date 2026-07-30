import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Props = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Basics/CoreConcepts/Props'));
const Stores = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Basics/CoreConcepts/Stores'));
const Bindings = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Basics/CoreConcepts/Bindings'));
const Events = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Basics/CoreConcepts/Events'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/svelte/coreconcepts/props',
    element: <Props />,
  },
  {
    path: '/svelte/coreconcepts/stores',
    element: <Stores />,
  },
  {
    path: '/svelte/coreconcepts/bindings',
    element: <Bindings />,
  },
  {
    path: '/svelte/coreconcepts/events',
    element: <Events />,
  },
];

export default CoreConcepts;
