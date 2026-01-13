import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WasmBindgen = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/WASM/WasmBindgen'));
const WasmPack = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/WASM/WasmPack'));

const WASM: RouteObject[] = [
  {
    path: '/languages/rust/advanced/wasm/wasm-bindgen',
    element: <WasmBindgen />,
  },
  {
    path: '/languages/rust/advanced/wasm/wasm-pack',
    element: <WasmPack />,
  },
];

export default WASM;
