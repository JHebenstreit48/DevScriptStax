import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Basics/Fundamentals";
import Config from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Basics/Config";
import WebMVC from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Basics/WebMVC";
import Data from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Basics/Data";
import ViewsAndStatic from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Basics/ViewsAndStatic";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Config,
  ...WebMVC,
  ...Data,
  ...ViewsAndStatic,
];

export default Basics;
