import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/Rust/Basics/Fundamentals";
import MemoryAndErrors from "@/routes/Individual/Granularized/Languages/Rust/Basics/MemoryAndErrors";
import ProjectSetup from "@/routes/Individual/Granularized/Languages/Rust/Basics/ProjectSetup";
import IOAndData from "@/routes/Individual/Granularized/Languages/Rust/Basics/IOAndData";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...MemoryAndErrors,
  ...ProjectSetup,
  ...IOAndData,
];

export default Basics;
