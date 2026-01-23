import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals";
import SCSSBestPractices from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSS/BestPractices";

const SCSS: RouteObject[] = [
  ...Fundamentals,
  ...SCSSBestPractices,
];

export default SCSS;
