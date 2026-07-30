import { RouteObject } from "react-router-dom";

import Less from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Less';
import Sass from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Sass';
import SCSS from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/SCSS';

const Preprocessors: RouteObject[] = [
  ...Less,
  ...Sass,
  ...SCSS,
];

export default Preprocessors;
