import { RouteObject } from "react-router-dom";

import IntroductionAndSelectors from "@/routes/IndividualRoutes/Granularized/FrontEnd/CSS/Basics/IntroductionAndSelectors";
import BoxModelAndPosition from "@/routes/IndividualRoutes/Granularized/FrontEnd/CSS/Basics/BoxModelAndPosition";

const Basics: RouteObject[] = [
    ...IntroductionAndSelectors,
    ...BoxModelAndPosition
];

export default Basics;