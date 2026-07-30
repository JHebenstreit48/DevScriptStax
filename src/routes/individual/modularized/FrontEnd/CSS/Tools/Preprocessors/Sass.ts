import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Sass/Fundamentals';
import AdvancedConcepts from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts';
import BestPractices from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Sass/BestPractices';

const Sass: RouteObject[] = [
  ...Fundamentals,
  ...AdvancedConcepts,
  ...BestPractices,
];

export default Sass;
