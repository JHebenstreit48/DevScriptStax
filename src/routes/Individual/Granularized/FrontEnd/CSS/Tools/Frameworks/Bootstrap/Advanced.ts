import { RouteObject } from "react-router-dom";

import Theming from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Theming";
import JavaScript from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/JavaScript";
import Performance from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Performance";
import A11yAndRTL from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/A11yAndRTL";
import Components from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Components";

const Advanced: RouteObject[] = [
  ...Theming,
  ...JavaScript,
  ...Performance,
  ...A11yAndRTL,
  ...Components,
];

export default Advanced;
