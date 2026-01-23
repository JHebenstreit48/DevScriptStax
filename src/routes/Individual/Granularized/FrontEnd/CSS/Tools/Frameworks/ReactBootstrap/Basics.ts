import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Fundamentals";
import CorePatterns from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/CorePatterns";
import Components from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CorePatterns,
  ...Components,
];

export default Basics;
