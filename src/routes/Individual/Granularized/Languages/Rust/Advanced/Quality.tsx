import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Testing = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/Quality/Testing'));
const Benchmarking = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/Quality/Benchmarking'));

const Quality: RouteObject[] = [
  {
    path: '/languages/rust/advanced/quality/testing-cargo-test',
    element: <Testing />,
  },
  {
    path: '/languages/rust/advanced/quality/benchmarking-criterion',
    element: <Benchmarking />,
  },
];

export default Quality;
