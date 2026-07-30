import { RouteObject } from "react-router-dom";

import Preprocessors from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Preprocessors';
import Postprocessors from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors';
import Frameworks from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks';

const Tools: RouteObject[] = [
  ...Preprocessors,
  ...Postprocessors,
  ...Frameworks,
];

export default Tools;