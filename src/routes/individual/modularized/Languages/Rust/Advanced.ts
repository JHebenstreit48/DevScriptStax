import { RouteObject } from "react-router-dom";

import AsyncAndConcurrency from '@/routes/individual/modularized/Languages/Rust/Advanced/AsyncAndConcurrency';
import Web from '@/routes/individual/modularized/Languages/Rust/Advanced/Web';
import WASM from '@/routes/individual/modularized/Languages/Rust/Advanced/WASM';
import InteropAndPerf from '@/routes/individual/modularized/Languages/Rust/Advanced/InteropAndPerf';
import Quality from '@/routes/individual/modularized/Languages/Rust/Advanced/Quality';

const Advanced: RouteObject[] = [
  ...AsyncAndConcurrency,
  ...Web,
  ...WASM,
  ...InteropAndPerf,
  ...Quality,
];

export default Advanced;
