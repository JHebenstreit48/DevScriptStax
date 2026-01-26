import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Basics";
import Advanced from "@/routes/Individual/Granularized/BackEnd/Frameworks/RubyOnRails/Advanced";

const RubyOnRails: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default RubyOnRails;
