import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MemoryOptimization = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/PerformanceAndMemory/MemoryOptimization'));
const EvictionPolicies = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/PerformanceAndMemory/EvictionPolicies'));
const LatencyAndPipelining = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/PerformanceAndMemory/LatencyAndPipelining'));

const PerformanceAndMemory: RouteObject[] = [
  {
    path: '/redis/advanced/performance-and-memory/memory-optimization',
    element: <MemoryOptimization />,
  },
  {
    path: '/redis/advanced/performance-and-memory/eviction-policies',
    element: <EvictionPolicies />,
  },
  {
    path: '/redis/advanced/performance-and-memory/latency-and-pipelining',
    element: <LatencyAndPipelining />,
  },
];

export default PerformanceAndMemory;
