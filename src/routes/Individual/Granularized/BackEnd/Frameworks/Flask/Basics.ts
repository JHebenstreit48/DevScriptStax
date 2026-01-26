import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/Frameworks/Flask/Basics/Fundamentals";
import Routing from "@/routes/Individual/Granularized/BackEnd/Frameworks/Flask/Basics/Routing";
import MiddlewareAndHooks from "@/routes/Individual/Granularized/BackEnd/Frameworks/Flask/Basics/MiddlewareAndHooks";
import DataAndForms from "@/routes/Individual/Granularized/BackEnd/Frameworks/Flask/Basics/DataAndForms";
import TemplatesAndStatic from "@/routes/Individual/Granularized/BackEnd/Frameworks/Flask/Basics/TemplatesAndStatic";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Routing,
  ...MiddlewareAndHooks,
  ...DataAndForms,
  ...TemplatesAndStatic,
];

export default Basics;
