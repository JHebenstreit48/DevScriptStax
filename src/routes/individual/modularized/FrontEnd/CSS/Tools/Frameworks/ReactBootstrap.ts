import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics';
import Advanced from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced';

const ReactBootstrap: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default ReactBootstrap;
