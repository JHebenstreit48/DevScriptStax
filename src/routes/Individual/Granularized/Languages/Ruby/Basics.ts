import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/Ruby/Basics/Fundamentals";
import DataAndErrors from "@/routes/Individual/Granularized/Languages/Ruby/Basics/DataAndErrors";
import ProjectSetup from "@/routes/Individual/Granularized/Languages/Ruby/Basics/ProjectSetup";
import IOAndUtils from "@/routes/Individual/Granularized/Languages/Ruby/Basics/IOAndUtils";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...DataAndErrors,
  ...ProjectSetup,
  ...IOAndUtils,
];

export default Basics;
