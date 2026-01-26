import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Basics";
import Advanced from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced";

const SpringBoot: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default SpringBoot;
