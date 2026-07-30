import { RouteObject } from "react-router-dom";

import IntroductionAndSelectors from '@/routes/individual/modularized/FrontEnd/CSS/Basics/IntroductionAndSelectors';
import BoxModelAndPositioning from '@/routes/individual/modularized/FrontEnd/CSS/Basics/BoxModelAndPositioning';

const Basics: RouteObject[] = [
  ...IntroductionAndSelectors,
  ...BoxModelAndPositioning,
];

export default Basics;