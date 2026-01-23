import { RouteObject } from "react-router-dom";

import AsyncAndConcurrency from "@/routes/Individual/Granularized/Languages/Rust/Advanced/AsyncAndConcurrency";
import Web from "@/routes/Individual/Granularized/Languages/Rust/Advanced/Web";
import WASM from "@/routes/Individual/Granularized/Languages/Rust/Advanced/WASM";
import InteropAndPerf from "@/routes/Individual/Granularized/Languages/Rust/Advanced/InteropAndPerf";
import Quality from "@/routes/Individual/Granularized/Languages/Rust/Advanced/Quality";

const Advanced: RouteObject[] = [
  ...AsyncAndConcurrency,
  ...Web,
  ...WASM,
  ...InteropAndPerf,
  ...Quality,
];

export default Advanced;
