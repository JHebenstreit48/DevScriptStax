import { RouteObject } from "react-router-dom";

import Rendering from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Advanced/Rendering";
import Performance from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Advanced/Performance";
import PluginsAndExtensibility from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Advanced/PluginsAndExtensibility";
import SecurityAndSEO from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Advanced/SecurityAndSEO";
import Deployment from "@/routes/Individual/Granularized/FrontEnd/Gatsby/Advanced/Deployment";

const Advanced: RouteObject[] = [
  ...Rendering,
  ...Performance,
  ...PluginsAndExtensibility,
  ...SecurityAndSEO,
  ...Deployment,
];

export default Advanced;
