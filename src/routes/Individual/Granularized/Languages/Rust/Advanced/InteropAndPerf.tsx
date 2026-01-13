import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FFI = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/InteropAndPerf/FFI'));
const ProfilingAndOptimizing = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/InteropAndPerf/ProfilingAndOptimizing'));

const InteropAndPerf: RouteObject[] = [
  {
    path: '/languages/rust/advanced/interop-perf/ffi',
    element: <FFI />,
  },
  {
    path: '/languages/rust/advanced/interop-perf/profiling-optimizing',
    element: <ProfilingAndOptimizing />,
  },
];

export default InteropAndPerf;
