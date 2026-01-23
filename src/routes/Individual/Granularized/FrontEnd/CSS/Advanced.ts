import { RouteObject } from "react-router-dom";

import Layouts from "@/routes/Individual/Granularized/FrontEnd/CSS/Advanced/Layouts";
import Effects from "@/routes/Individual/Granularized/FrontEnd/CSS/Advanced/Effects";
import ResponsiveAndVariables from "@/routes/Individual/Granularized/FrontEnd/CSS/Advanced/ResponseAndVar";

const Advanced: RouteObject[] = [
  ...Layouts,
  ...Effects,
  ...ResponsiveAndVariables,
];

export default Advanced;