import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerformanceOptimization = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Advanced/PerformanceAndRendering/PerformanceOptimization'));
const ServerSideRendering = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Advanced/PerformanceAndRendering/ServerSideRendering'));
const StaticSiteGeneration = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Advanced/PerformanceAndRendering/StaticSiteGeneration'));
const HybridRendering = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Advanced/PerformanceAndRendering/HybridRendering'));
const ErrorBoundaries = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Advanced/PerformanceAndRendering/ErrorBoundaries'));

const PerformanceAndRendering: RouteObject[] = [
  {
    path: '/react/advanced/performance',
    element: <PerformanceOptimization />,
  },
  {
    path: '/react/advanced/rendering/ssr',
    element: <ServerSideRendering />,
  },
  {
    path: '/react/advanced/rendering/ssg',
    element: <StaticSiteGeneration />,
  },
  {
    path: '/react/advanced/rendering/hybrid',
    element: <HybridRendering />,
  },
  {
    path: '/react/advanced/errorboundaries',
    element: <ErrorBoundaries />,
  },
];

export default PerformanceAndRendering;
