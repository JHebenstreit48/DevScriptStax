import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Basics/Fundamentals";
import Routing from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Basics/Routing";
import Middleware from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Basics/Middleware";
import DataAndBody from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Basics/DataAndBody";
import TemplatesAndStatic from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Basics/TemplatesAndStatic";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Routing,
  ...Middleware,
  ...DataAndBody,
  ...TemplatesAndStatic,
];

export default Basics;
