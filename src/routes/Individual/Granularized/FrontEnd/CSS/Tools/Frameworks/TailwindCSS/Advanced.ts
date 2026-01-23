import { RouteObject } from "react-router-dom";

import Theming from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Theming";
import Plugins from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Plugins";
import Composition from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Composition";
import Performance from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Performance";
import Integration from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Integration";

const Advanced: RouteObject[] = [
  ...Theming,
  ...Plugins,
  ...Composition,
  ...Performance,
  ...Integration,
];

export default Advanced;
