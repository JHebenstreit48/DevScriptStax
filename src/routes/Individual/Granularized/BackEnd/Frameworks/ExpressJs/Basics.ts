import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Basics/Fundamentals";
import Routing from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Basics/Routing";
import Middleware from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Basics/Middleware";
import DataHandling from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Basics/DataHandling";
import ViewsAndStatic from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs/Basics/ViewsAndStatic";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Routing,
  ...Middleware,
  ...DataHandling,
  ...ViewsAndStatic,
];

export default Basics;
