import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/Rust/Basics/Fundamentals';
import MemoryAndErrors from '@/routes/individual/modularized/Languages/Rust/Basics/MemoryAndErrors';
import ProjectSetup from '@/routes/individual/modularized/Languages/Rust/Basics/ProjectSetup';
import IOAndData from '@/routes/individual/modularized/Languages/Rust/Basics/IOAndData';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...MemoryAndErrors,
  ...ProjectSetup,
  ...IOAndData,
];

export default Basics;
