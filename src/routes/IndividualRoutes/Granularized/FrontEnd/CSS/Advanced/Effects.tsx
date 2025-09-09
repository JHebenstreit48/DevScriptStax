import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Transforms = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Advanced/Effects/Transforms'));
const Transitions = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Advanced/Effects/Transitions'));
const Animations = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Advanced/Effects/Animations'));

const Effects: RouteObject[] = [
  {
    path: '/css/advanced/effects/transforms',
    element: <Transforms />,
  },
  {
    path: '/css/advanced/effects/transitions',
    element: <Transitions />,
  },
  {
    path: '/css/advanced/effects/animations',
    element: <Animations />,
  },
];

export default Effects;