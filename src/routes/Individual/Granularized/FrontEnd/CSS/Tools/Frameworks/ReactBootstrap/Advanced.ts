import { RouteObject } from "react-router-dom";

import Integration from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Integration";
import Theming from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Theming";
import SSRAndCodeSplit from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/SSRAndCodeSplit";
import A11yAndTesting from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/A11yAndTesting";

const Advanced: RouteObject[] = [
  ...Integration,
  ...Theming,
  ...SSRAndCodeSplit,
  ...A11yAndTesting,
];

export default Advanced;
