import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerfHooksAndBenchmarks = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/NodeJs/Advanced/Performance/PerfHooksAndBenchmarks'));
const CPUAndHeapProfiling = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/NodeJs/Advanced/Performance/CPUAndHeapProfiling'));

const Performance: RouteObject[] = [
  {
    path: '/frameworks/nodejs/advanced/performance/perf-hooks-benchmarks',
    element: <PerfHooksAndBenchmarks />,
  },
  {
    path: '/frameworks/nodejs/advanced/performance/cpu-heap-profiling',
    element: <CPUAndHeapProfiling />,
  },
];

export default Performance;
