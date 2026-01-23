import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Languages/Rust/Basics";
import Advanced from "@/routes/Individual/Granularized/Languages/Rust/Advanced";

const Rust: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Rust;
