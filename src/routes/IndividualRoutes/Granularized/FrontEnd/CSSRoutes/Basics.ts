import { RouteObject } from "react-router-dom";

import IntroductionAndSelectors from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/CSSRoutes/Basics/IntroductionAndSelectors";
import BoxModelAndPosition from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes/CSSRoutes/Basics/BoxModelAndPosition";

const Basics: RouteObject[] = [
    ...IntroductionAndSelectors,
    ...BoxModelAndPosition
];

export default Basics;