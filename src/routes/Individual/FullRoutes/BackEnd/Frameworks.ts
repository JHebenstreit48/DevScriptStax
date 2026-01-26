import { RouteObject } from "react-router-dom";

import Django from "@/routes/Individual/Granularized/BackEnd/Frameworks/Django";
import ExpressJs from "@/routes/Individual/Granularized/BackEnd/Frameworks/ExpressJs";
import Flask from "@/routes/Individual/Granularized/BackEnd/Frameworks/Flask";
import KoaJs from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs";
import NodeJs from "@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs";
import RubyOnRails from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails";
import Spring from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring";

const Frameworks: RouteObject[] = [
  ...Django,
  ...ExpressJs,
  ...Flask,
  ...KoaJs,
  ...NodeJs,
  ...RubyOnRails,
  ...Spring,
];
export default Frameworks;