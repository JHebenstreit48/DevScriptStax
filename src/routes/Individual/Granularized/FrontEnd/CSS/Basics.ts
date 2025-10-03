import { RouteObject } from "react-router-dom";

import IntroductionAndSelectors from "@/routes/Individual/Granularized/FrontEnd/CSS/Basics/IntroductionAndSelectors";
import BoxModelAndPosition from "@/routes/Individual/Granularized/FrontEnd/CSS/Basics/BoxModelAndPosition";

const Basics: RouteObject[] = [
    ...IntroductionAndSelectors,
    ...BoxModelAndPosition
];

export default Basics;