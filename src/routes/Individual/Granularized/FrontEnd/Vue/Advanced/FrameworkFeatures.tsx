import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CompositionAPI = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Advanced/FrameworkFeatures/CompositionAPI'));
const Mixins = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Advanced/FrameworkFeatures/Mixins'));
const Transitions = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Advanced/FrameworkFeatures/Transitions'));
const ServerSideRendering = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Advanced/FrameworkFeatures/ServerSideRendering'));

const FrameworkFeatures: RouteObject[] = [
  {
    path: '/vue/advanced/composition-api',
    element: <CompositionAPI />,
  },
  {
    path: '/vue/advanced/mixins',
    element: <Mixins />,
  },
  {
    path: '/vue/advanced/transitions',
    element: <Transitions />,
  },
  {
    path: '/vue/advanced/ssr',
    element: <ServerSideRendering />,
  },
];

export default FrameworkFeatures;
