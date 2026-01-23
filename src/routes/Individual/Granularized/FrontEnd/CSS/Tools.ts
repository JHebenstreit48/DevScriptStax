import { RouteObject } from "react-router-dom";

import Preprocessors from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors";
import Postprocessors from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors";
import Frameworks from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks";

const Tools: RouteObject[] = [
  ...Preprocessors,
  ...Postprocessors,
  ...Frameworks,
];

export default Tools;