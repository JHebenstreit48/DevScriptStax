import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Profiling = lazy(() => import('@/pages/mainTabs/Languages/Ruby/Advanced/PerfAndTooling/Profiling'));
const GCAndMemory = lazy(() => import('@/pages/mainTabs/Languages/Ruby/Advanced/PerfAndTooling/GCAndMemory'));

const PerfAndTooling: RouteObject[] = [
  {
    path: '/languages/ruby/advanced/perf-tooling/profiling',
    element: <Profiling />,
  },
  {
    path: '/languages/ruby/advanced/perf-tooling/gc-memory',
    element: <GCAndMemory />,
  },
];

export default PerfAndTooling;
