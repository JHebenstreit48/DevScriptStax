import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals';
import SCSSBestPractices from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/SCSS/BestPractices';

const SCSS: RouteObject[] = [
  ...Fundamentals,
  ...SCSSBestPractices,
];

export default SCSS;
