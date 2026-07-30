import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/Gatsby/Basics/Fundamentals';
import CoreConcepts from '@/routes/individual/modularized/FrontEnd/Gatsby/Basics/CoreConcepts';
import AssetsAndStyling from '@/routes/individual/modularized/FrontEnd/Gatsby/Basics/AssetsAndStyling';
import ConfigAndPlugins from '@/routes/individual/modularized/FrontEnd/Gatsby/Basics/ConfigAndPlugins';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
  ...AssetsAndStyling,
  ...ConfigAndPlugins,
];

export default Basics;