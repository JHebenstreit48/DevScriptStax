import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/Rust/Basics';
import Advanced from '@/routes/individual/modularized/Languages/Rust/Advanced';

const Rust: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Rust;
