import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/Fundamentals";
import AdvancedConcepts from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/AdvancedConcepts";
import BestPractices from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/BestPractices";

const Less: RouteObject[] = [
  ...Fundamentals,
  ...AdvancedConcepts,
  ...BestPractices,
];

export default Less;
