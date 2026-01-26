import { RouteObject } from "react-router-dom";

import SpringBoot from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot";
import SpringMain from "@/routes/Individual/Granularized/BackEnd/Frameworks/Spring/SpringMain";

const Spring: RouteObject[] = [
  ...SpringBoot,
  ...SpringMain,
];

export default Spring;
