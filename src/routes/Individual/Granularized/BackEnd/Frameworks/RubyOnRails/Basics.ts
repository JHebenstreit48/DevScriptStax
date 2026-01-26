import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Basics/Fundamentals";
import RoutingAndControllers from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Basics/RoutingAndControllers";
import ModelsAndAR from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Basics/ModelsAndAR";
import ViewsAndForms from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Basics/ViewsAndForms";
import AssetsAndConfig from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Basics/AssetsAndConfig";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...RoutingAndControllers,
  ...ModelsAndAR,
  ...ViewsAndForms,
  ...AssetsAndConfig,
];

export default Basics;
