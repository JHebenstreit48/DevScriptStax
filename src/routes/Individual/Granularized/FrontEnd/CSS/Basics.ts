import { RouteObject } from "react-router-dom";

import IntroductionAndSelectors from "@/routes/Individual/Granularized/FrontEnd/CSS/Basics/IntroductionAndSelectors";
import BoxModelAndPositioning from "@/routes/Individual/Granularized/FrontEnd/CSS/Basics/BoxModelAndPositioning";

const Basics: RouteObject[] = [
  ...IntroductionAndSelectors,
  ...BoxModelAndPositioning,
];

export default Basics;