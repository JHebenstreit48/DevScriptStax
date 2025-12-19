import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FFI = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/Interop/FFI'));
const JSInterop = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/Interop/JSInterop'));

const Interop: RouteObject[] = [
  {
    path: '/dart/advanced/interop/ffi',
    element: <FFI />,
  },
  {
    path: '/dart/advanced/interop/js',
    element: <JSInterop />,
  },
];

export default Interop;
